import React from "react";
import { Grid, Typography } from "@material-ui/core";

import AddComponent from "./../../AddComponent/AddComponent";
import { HobbyField, ReferenceField } from "./../../IncrementingComponent";
import {
  FormField,
  FieldDivider,
  FieldDate,
  SelectField,
} from "./../../FormField";

export default function OtherInfo(props) {
  return (
    <Grid container spacing={2}>
      <FieldDivider label="VIII. OTHER INFORMATION" />
      <AddComponent>{HobbyField}</AddComponent>
      <FieldDivider />
      <Typography>
        Are you related by consanguinity or affinity to the appointing or
        recommending authority, or to the chief of bureau or office or to the
        person who has immediate supervisor over you in the Office, Bureau or
        Department where you will be appointed.
      </Typography>
      <SelectField
        label="a. within the third degree?"
        options={["YES", "NO"]}
        md={12}
        sm={12}
      />
      <SelectField
        label="b. within the fourth degree (for Local Government Unit - Career
        Employees)?"
        options={["YES", "NO"]}
        md={6}
        sm={6}
      />
      <FormField
        idname="sfirstname"
        label="If YES, give details"
        sm={6}
        md={6}
      />
      <FieldDivider />
      <SelectField
        label="a. Have you ever been found guilty of any administrative offense?"
        options={["YES", "NO"]}
        md={6}
        sm={6}
      />
      <FormField
        idname="sfirstname"
        label="If YES, give details"
        sm={6}
        md={6}
      />
      <SelectField
        label="b. Have you been criminally charged before any court?"
        options={["YES", "NO"]}
        md={4}
        sm={6}
      />
      <FormField idname="sfirstname" label="if YES, Date Filed" sm={6} md={4} />
      <FormField idname="sfirstname" label="Status of Case/s" sm={6} md={4} />
      <FieldDivider />
      <Typography>
        Have you ever been convicted of any crime or violation of any law,
        decree, ordinance or regulation by any court or tribunal?
      </Typography>
      <SelectField options={["YES", "NO"]} md={6} sm={6} />
      <FormField
        idname="sfirstname"
        label="If YES, give details"
        sm={6}
        md={6}
      />
      <FieldDivider />
      <Typography>
        Have you ever been seperated from the service in any of the following
        modes: resignation, retirement, dropped from the rolls, dismissal,
        termination, end of term, finished contract or phased out(abolition) in
        the public or private sector?
      </Typography>
      <SelectField options={["YES", "NO"]} md={6} sm={6} />
      <FormField
        idname="sfirstname"
        label="If YES, give details"
        sm={6}
        md={6}
      />
      <FieldDivider />
      <Typography>
        a. Have you ever been a candidate in a national or local election held
        within the last year(except Barangay election)?
      </Typography>
      <SelectField options={["YES", "NO"]} md={6} sm={6} />
      <FormField
        idname="sfirstname"
        label="If YES, give details"
        sm={6}
        md={6}
      />
      <Typography>
        b. Have you resigned from the government service during the three
        (3)-month period before the last election to promote/actively campaign
        for a nationl or local candidate?
      </Typography>
      <SelectField options={["YES", "NO"]} md={6} sm={6} />
      <FormField
        idname="sfirstname"
        label="If YES, give details"
        sm={6}
        md={6}
      />
      <FieldDivider />
      <Typography>
        a. Have you acquired the status of an immigrant or permanent resident of
        another country?
      </Typography>
      <SelectField options={["YES", "NO"]} md={6} sm={6} />
      <FormField
        idname="sfirstname"
        label="If YES, give details"
        sm={6}
        md={6}
      />
      <FieldDivider label="Pursuant to: (a) Indigenous People's Act (RA 8371); (b) Magna Carta for Disabled Persons (RA 7277); and (c) Solo Parents Welfare Act of 2000(RA 8972), please answer the following items:" />
      <SelectField
        label="a. Are you a member of any indigenous group?"
        options={["YES", "NO"]}
        md={6}
        sm={6}
      />
      <FormField
        idname="sfirstname"
        label="If YES, give details"
        sm={6}
        md={6}
      />
      <SelectField
        label="b. Are you a person with disability?"
        options={["YES", "NO"]}
        md={6}
        sm={6}
      />
      <FormField
        idname="sfirstname"
        label="If YES, please specify ID No"
        sm={6}
        md={6}
      />
      <SelectField
        label="c. Are you a solo parent?"
        options={["YES", "NO"]}
        md={6}
        sm={6}
      />
      <FormField
        idname="sfirstname"
        label="If YES, please specify ID No"
        sm={6}
        md={6}
      />
      <FieldDivider label="REFERENCES (Person not related by consanguinity or affinity to applicant/appointee)" />
      <AddComponent>{ReferenceField}</AddComponent>
    </Grid>
  );
}
