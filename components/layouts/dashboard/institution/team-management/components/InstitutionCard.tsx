import React from "react";
import {
  Card,
  CardContent,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import { School, Badge, Work, Wc } from "@mui/icons-material";
import { montserrat } from "@/utils/fonts";
import { TEAM_DETAILS_RESPONSE } from "@/utils/type";

interface InstitutionCardProps {
  teamDetails: TEAM_DETAILS_RESPONSE;
}

const InstitutionCard = ({ teamDetails }: InstitutionCardProps) => {
  return (
    <Card elevation={0} sx={{ border: "1px solid #e0e0e0", borderRadius: "12px" }}>
      <CardContent sx={{ p: 3 }}>
        <Typography
          className={montserrat.className}
          sx={{
            fontWeight: 700,
            fontSize: "16px",
            mb: 3,
          }}
        >
          Institution Details
        </Typography>
        <Divider />
        <List sx={{ py: 2, px: 1 }}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, sm: 6 }}>
              <ListItem disableGutters sx={{ py: 1.5, borderBottom: "1px solid #e0e0e0" }}>
                <ListItemAvatar>
                  <School
                    sx={{
                      color: "#757575",
                      backgroundColor: "#F1F5F9",
                      p: 1,
                      borderRadius: "8px",
                    }}
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Typography variant="body2" sx={{ fontSize: "12px", color: "#757575" }}>
                      SCHOOL NAME
                    </Typography>
                  }
                  secondary={
                    <Typography sx={{ fontSize: "14px", fontWeight: 500 }}>
                      {teamDetails.school?.name || "-"}
                    </Typography>
                  }
                />
              </ListItem>
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <ListItem disableGutters sx={{ py: 1.5, borderBottom: "1px solid #e0e0e0" }}>
                <ListItemAvatar>
                  <Badge
                    sx={{
                      color: "#757575",
                      backgroundColor: "#F1F5F9",
                      p: 1,
                      borderRadius: "8px",
                    }}
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Typography variant="body2" sx={{ fontSize: "12px", color: "#757575" }}>
                      BOARD / AFFILIATION
                    </Typography>
                  }
                  secondary={
                    <Typography sx={{ fontSize: "14px", fontWeight: 500 }}>
                      {teamDetails.board?.name || "-"}
                    </Typography>
                  }
                />
              </ListItem>
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <ListItem disableGutters sx={{ py: 1.5 }}>
                <ListItemAvatar>
                  <Work
                    sx={{
                      color: "#757575",
                      backgroundColor: "#F1F5F9",
                      p: 1,
                      borderRadius: "8px",
                    }}
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Typography variant="body2" sx={{ fontSize: "12px", color: "#757575" }}>
                      LOCATION
                    </Typography>
                  }
                  secondary={
                    <Typography sx={{ fontSize: "14px", fontWeight: 500 }}>
                      {teamDetails.school?.addressLine1 ? `${teamDetails.school.addressLine1}, ` : ""}
                      {teamDetails.school?.city ? `${teamDetails.school.city}, ` : ""}
                      {teamDetails.school?.state ? `${teamDetails.school.state}` : ""}
                    </Typography>
                  }
                />
              </ListItem>
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <ListItem disableGutters sx={{ py: 1.5 }}>
                <ListItemAvatar>
                  <Wc
                    sx={{
                      color: "#757575",
                      backgroundColor: "#F1F5F9",
                      p: 1,
                      borderRadius: "8px",
                    }}
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Typography variant="body2" sx={{ fontSize: "12px", color: "#757575" }}>
                      CONTACT PERSON
                    </Typography>
                  }
                  secondary={
                    <Typography sx={{ fontSize: "14px", fontWeight: 500 }}>
                      {teamDetails.school?.contactPersonName || "-"} (
                      {teamDetails.school?.contactPersonEmail || "-"}
                      )
                    </Typography>
                  }
                />
              </ListItem>
            </Grid>
          </Grid>
        </List>
      </CardContent>
    </Card>
  );
};

export default InstitutionCard;
