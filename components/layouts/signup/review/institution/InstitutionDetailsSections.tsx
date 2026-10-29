"use client";
import React from "react";
import { Grid } from "@mui/material";
import { SectionHeader, DetailBox } from "./ReviewElements";

interface InstitutionDetailsSectionsProps {
  institutionData: any;
}

export const InstitutionDetailsSections: React.FC<
  InstitutionDetailsSectionsProps
> = ({ institutionData }) => {
  const hasRegionalDetails = Boolean(institutionData?.isd);

  const hasAffiliationDetails = Boolean(
    institutionData?.affiliationType ||
      institutionData?.affiliationNumber ||
      institutionData?.registrationYear,
  );

  const hasMetrics = Boolean(
    institutionData?.totalTeacherCount || institutionData?.totalStudentCount,
  );

  const hasContactPerson = Boolean(
    institutionData?.contactPersonName ||
      institutionData?.contactPersonEmail ||
      institutionData?.contactPersonPhone,
  );

  const boardName =
    typeof institutionData?.affiliationType === "string"
      ? institutionData.affiliationType
      : institutionData?.affiliationType?.name || "";

  return (
    <Grid container spacing={1.5}>
      {/* Basic Details */}
      <Grid size={12}>
        <SectionHeader title="Basic Details" />
      </Grid>
      <DetailBox
        label="Institution Name"
        value={institutionData?.institutionName}
      />
      <DetailBox
        label="Principal Name"
        value={institutionData?.principalName}
      />
      <DetailBox
        label="Email Address"
        value={institutionData?.email}
      />
      <DetailBox
        label="Phone Number"
        value={institutionData?.phone}
      />
      <DetailBox
        label="Website"
        value={institutionData?.website}
      />
      <DetailBox
        label="Country"
        value={institutionData?.country?.name}
      />

      {/* Address Information */}
      <Grid size={12}>
        <SectionHeader title="Address Information" />
      </Grid>
      <DetailBox
        label="Address Line 1"
        value={institutionData?.addressLine1}
      />
      <DetailBox
        label="Address Line 2"
        value={institutionData?.addressLine2}
      />
      <DetailBox label="City" value={institutionData?.city} />
      <DetailBox label="State" value={institutionData?.state} />
      <DetailBox
        label="Postal Code"
        value={institutionData?.postalCode}
      />

      {/* Regional Details */}
      {hasRegionalDetails && (
        <>
          <Grid size={12}>
            <SectionHeader title="Regional Details" />
          </Grid>
          <DetailBox label="ISD Code" value={institutionData?.isd} />
        </>
      )}

      {/* Affiliation Details */}
      {hasAffiliationDetails && (
        <>
          <Grid size={12}>
            <SectionHeader title="Affiliation Details" />
          </Grid>
          <DetailBox label="Board" value={boardName} />
          <DetailBox
            label="Affiliation Number"
            value={institutionData?.affiliationNumber}
          />
          <DetailBox
            label="Registration Year"
            value={institutionData?.registrationYear}
          />
        </>
      )}

      {/* Institutional Metrics */}
      {hasMetrics && (
        <>
          <Grid size={12}>
            <SectionHeader title="Institutional Metrics" />
          </Grid>
          <DetailBox
            label="Total Teachers"
            value={institutionData?.totalTeacherCount}
          />
          <DetailBox
            label="Total Students"
            value={institutionData?.totalStudentCount}
          />
        </>
      )}

      {/* Contact Person Details */}
      {hasContactPerson && (
        <>
          <Grid size={12}>
            <SectionHeader title="Contact Person" />
          </Grid>
          <DetailBox
            label="Contact Person Name"
            value={institutionData?.contactPersonName}
          />
          <DetailBox
            label="Contact Person Email"
            value={institutionData?.contactPersonEmail}
          />
          <DetailBox
            label="Contact Person Phone"
            value={institutionData?.contactPersonPhone}
          />
        </>
      )}
    </Grid>
  );
};

export default InstitutionDetailsSections;
