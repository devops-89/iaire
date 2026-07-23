import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Typography,
  IconButton,
  CircularProgress,
} from "@mui/material";
import { Close } from "@mui/icons-material";
import BeamButton from "@/components/widgets/BeamButton";
import { COLORS } from "@/utils/enum";
import { montserrat, roboto } from "@/utils/fonts";
import { useForgetPassword } from "@/hooks/common/useForgetPassword";
import { MuiOtpInput } from "mui-one-time-password-input";

interface ForgotPasswordModalProps {
  open: boolean;
  onClose: () => void;
  email?: string;
}

export const ForgotPasswordModal = ({
  open,
  onClose,
  email: initialEmail = "",
}: ForgotPasswordModalProps) => {
  const [step, setStep] = useState<1 | 2>(1);
  const [email, setEmail] = useState(initialEmail);
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  
  const { forgetPassword, resetPassword, loading } = useForgetPassword();

  useEffect(() => {
    if (!open) {
      // Reset state when modal is closed
      setStep(1);
      setEmail("");
      setOtp("");
      setNewPassword("");
    } else if (initialEmail) {
      setEmail(initialEmail);
    }
  }, [open, initialEmail]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1 && email) {
      const success = await forgetPassword(email);
      if (success) {
        setStep(2);
      }
    } else if (step === 2 && otp && newPassword) {
      const success = await resetPassword({ identifier: email, otp, newPassword: newPassword });
      if (success) {
        onClose();
      }
    }
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle
        sx={{
          fontFamily: roboto.style.fontFamily,
          fontWeight: 700,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        Reset Password
        <IconButton onClick={onClose} disabled={loading}>
          <Close />
        </IconButton>
      </DialogTitle>
      <form onSubmit={handleSubmit}>
        <DialogContent dividers>
          {step === 1 ? (
            <>
              <Typography
                sx={{
                  fontFamily: montserrat.style.fontFamily,
                  mb: 2,
                  fontSize: 14,
                }}
              >
                Enter your email address and we'll send you an OTP to reset your
                password.
              </Typography>
              <TextField
                autoFocus
                margin="dense"
                label="Email Address"
                type="email"
                fullWidth
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </>
          ) : (
            <>
              <Typography
                sx={{
                  fontFamily: montserrat.style.fontFamily,
                  mb: 2,
                  fontSize: 14,
                }}
              >
                Enter the OTP sent to your email and your new password.
              </Typography>
              <MuiOtpInput
                value={otp}
                onChange={setOtp}
                length={6}
                sx={{ mb: 3 }}
              />
              <TextField
                margin="dense"
                label="New Password"
                type="password"
                fullWidth
                variant="outlined"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
              />
            </>
          )}
        </DialogContent>
        <DialogActions sx={{ p: 2 }}>
          <BeamButton onClick={onClose} color="inherit" disabled={loading}>
            Cancel
          </BeamButton>
          <BeamButton
            type="submit"
            disabled={(step === 1 && !email) || (step === 2 && (!otp || !newPassword)) || loading}
            sx={{
              backgroundColor: COLORS.PRIMARY_NAVY,
              color: COLORS.WHITE,
              "&:hover": {
                backgroundColor: COLORS.PRIMARY_BLUE,
              },
            }}
          >
            {loading ? (
              <CircularProgress size={24} color="inherit" />
            ) : step === 1 ? (
              "Send OTP"
            ) : (
              "Reset Password"
            )}
          </BeamButton>
        </DialogActions>
      </form>
    </Dialog>
  );
};
