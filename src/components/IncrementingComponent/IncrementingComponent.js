import React from "react";
import { Grid, IconButton } from "@material-ui/core";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
import { FormField, FieldDate, SelectField } from "./../FormField/FormField";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

function CustomCard(props) {
  return (
    <Card
      key={props.key}
      index={props.index}
      spacing={2}
      style={{ marginBottom: 10 }}
    >
      <CardContent>
        <Grid container spacing={2} key={props.key} index={props.index}>
          <Grid item xs={10} md={11} sm={11}>
            <Grid container spacing={2}>
              {props.children}
            </Grid>
          </Grid>

          <Grid
            item
            xs={2}
            md={1}
            sm={1}
            style={{
              margin: "auto",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <IconButton color="secondary" onClick={props.removeMe}>
              <RemoveCircleIcon />
            </IconButton>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export function HobbyField(props) {
  return (
    <CustomCard removeMe={() => props.onRemoveChild(props.index)}>
      <Grid container spacing={2} key={props.key}>
        <FormField
          idname={"hobbies" + props.index}
          label="SPECIAL SKILLS AND HOBBIES"
          md={3}
          sm={12}
          value={props.childData.hobby_name}
          onChange={(element) => {
            props.insertData(props.index, "hobby_name", element.target.value);
          }}
        />
        <FormField
          idname={"recognition" + props.index}
          label="NON-ACADEMIC/ RECOGNITION"
          sm={12}
          md={5}
          value={props.childData.hobby_recognition}
          onChange={(element) => {
            props.insertData(
              props.index,
              "hobby_recognition",
              element.target.value
            );
          }}
        />
        <FormField
          idname={"association" + props.index}
          label="MEMBERSHIP IN ASSOCIATION/ ORGANIZATION"
          sm={12}
          md={4}
          value={props.childData.hobby_association}
          onChange={(element) => {
            props.insertData(
              props.index,
              "hobby_association",
              element.target.value
            );
          }}
        />
      </Grid>
    </CustomCard>
  );
}

export function ReferenceField(props) {
  return (
    <CustomCard removeMe={() => props.onRemoveChild(props.index)}>
      <Grid container spacing={2} key={props.key}>
        <FormField
          idname={"name" + props.index}
          label="NAME"
          sm={12}
          md={4}
          value={props.childData.reference_name}
          onChange={(element) => {
            props.insertData(
              props.index,
              "reference_name",
              element.target.value
            );
          }}
        />
        <FormField
          idname={"address" + props.index}
          label="ADDRESS"
          sm={12}
          md={4}
          value={props.childData.reference_address}
          onChange={(element) => {
            props.insertData(
              props.index,
              "reference_address",
              element.target.value
            );
          }}
        />
        <FormField
          idname={"telephone" + props.index}
          label="TEL. NO."
          sm={12}
          md={4}
          value={props.childData.reference_telephone}
          onChange={(element) => {
            props.insertData(
              props.index,
              "reference_telephone",
              element.target.value
            );
          }}
        />
      </Grid>
    </CustomCard>
  );
}

export function EligibilityField(props) {
  return (
    <CustomCard removeMe={() => props.onRemoveChild(props.index)}>
      <Grid container spacing={2} key={props.key}>
        <FormField
          idname={"eligibility" + props.index}
          label="ELIGIBILITY"
          md={9}
          sm={9}
          value={props.childData.eligibility}
          onChange={(element) => {
            props.insertData(props.index, "eligibility", element.target.value);
          }}
        />
        <FormField idname={"rating" + props.index} label="RATING" sm={3} />
        <FieldDate
          idname={"examDate" + props.index}
          label="EXAMNATION/ CONFERMENT"
          type="date"
          format="MM/dd/yyyy"
          value={props.childData.eligiblity_date}
          onChange={(element) => {
            props.insertData(props.index, "eligiblity_date", element);
          }}
        />
        <FormField
          idname={"place" + props.index}
          label="PLACE"
          value={props.childData.eligiblity_place}
          onChange={(element) => {
            props.insertData(
              props.index,
              "eligiblity_place",
              element.target.value
            );
          }}
        />
        <FormField
          idname={"number" + props.index}
          label="NUMBER"
          value={props.childData.eligiblity_number}
          onChange={(element) => {
            props.insertData(
              props.index,
              "eligiblity_number",
              element.target.value
            );
          }}
        />
        <FieldDate
          idname={"validity" + props.index}
          label="VALIDITY"
          type="date"
          format="MM/dd/yyyy"
          value={props.childData.eligiblity_validity}
          onChange={(element) => {
            props.insertData(
              props.index,
              "eligiblity_validity",
              element.target.value
            );
          }}
        />
      </Grid>
    </CustomCard>
  );
}

export function WorkField(props) {
  return (
    <CustomCard removeMe={() => props.onRemoveChild(props.index)}>
      <Grid container spacing={2} key={props.key}>
        <FieldDate
          idname={"workFrom" + props.index}
          label="FROM"
          type="date"
          format="MM/dd/yyyy"
          value={props.childData.work_from}
          onChange={(element) => {
            props.insertData(props.index, "work_from", element);
          }}
        />
        <FieldDate
          idname={"workTo" + props.index}
          label="TO"
          type="date"
          format="MM/dd/yyyy"
          value={props.childData.work_to}
          onChange={(element) => {
            props.insertData(props.index, "work_to", element);
          }}
        />
        <FormField
          idname={"workTitle" + props.index}
          label="POSITION TITLE"
          md={6}
          value={props.childData.work_title}
          onChange={(element) => {
            props.insertData(props.index, "work_title", element.target.value);
          }}
        />
        <FormField
          idname={"workAgency" + props.index}
          label="DEPARTMENT/ AGENCY/ OFFICE/ COMPANY"
          md={4}
          value={props.childData.work_agency}
          onChange={(element) => {
            props.insertData(props.index, "work_agency", element.target.value);
          }}
        />
        <FormField
          idname={"workSalary" + props.index}
          label="MONTHLY SALARY"
          md={2}
          value={props.childData.work_salary}
          onChange={(element) => {
            props.insertData(props.index, "work_salary", element.target.value);
          }}
        />
        <FormField
          idname={"workGrade" + props.index}
          label="SALARY GRADE"
          md={2}
          value={props.childData.work_grade}
          onChange={(element) => {
            props.insertData(props.index, "work_grade", element.target.value);
          }}
        />
        <FormField
          idname={"workStatus" + props.index}
          label="STATUS OF APPOINTMENT"
          md={3}
          value={props.childData.work_status}
          onChange={(element) => {
            props.insertData(props.index, "work_status", element.target.value);
          }}
        />
        <SelectField
          idname={"workIsGovservice" + props.index}
          label="GOV'T SERVICE"
          options={["YES", "NO"]}
          md={1}
          value={props.childData.work_isgov}
          onChange={(element) => {
            props.insertData(props.index, "work_isgov", element.target.value);
          }}
        />
      </Grid>
    </CustomCard>
  );
}

export function VoluntaryField(props) {
  return (
    <CustomCard removeMe={() => props.onRemoveChild(props.index)}>
      <Grid container spacing={2} key={props.key}>
        <FormField
          idname={"orgInfo" + props.index}
          label="NAME & ADDRESS OF ORGANIZATION"
          md={12}
          value={props.childData.voluntary_info}
          onChange={(element) => {
            props.insertData(
              props.index,
              "voluntary_info",
              element.target.value
            );
          }}
        />
        <FieldDate
          idname={"orgFrom" + props.index}
          label="FROM"
          type="date"
          format="MM/dd/yyyy"
          md={2}
          value={props.childData.voluntary_from}
          onChange={(element) => {
            props.insertData(props.index, "voluntary_from", element);
          }}
        />
        <FieldDate
          idname={"orgTo" + props.index}
          label="TO"
          type="date"
          format="MM/dd/yyyy"
          md={2}
          value={props.childData.voluntary_to}
          onChange={(element) => {
            props.insertData(props.index, "voluntary_to", element);
          }}
        />
        <FormField
          idname={"orgHours" + props.index}
          label="NO OF HOURS"
          md={2}
          value={props.childData.voluntary_hours}
          onChange={(element) => {
            props.insertData(
              props.index,
              "voluntary_hours",
              element.target.value
            );
          }}
        />
        <FormField
          idname={"orgNature" + props.index}
          label="POSITION NATURE OF WORK"
          md={6}
          value={props.childData.voluntary_nature}
          onChange={(element) => {
            props.insertData(
              props.index,
              "voluntary_nature",
              element.target.value
            );
          }}
        />
      </Grid>
    </CustomCard>
  );
}

export function LearningField(props) {
  return (
    <CustomCard removeMe={() => props.onRemoveChild(props.index)}>
      <Grid container spacing={2} key={props.key}>
        <FormField
          idname={"trainTitle" + props.index}
          label="TITLE"
          md={6}
          value={props.childData.learning_title}
          onChange={(element) => {
            props.insertData(
              props.index,
              "learning_title",
              element.target.value
            );
          }}
        />
        <FieldDate
          idname={"trainFrom" + props.index}
          label="FROM"
          type="date"
          format="MM/dd/yyyy"
          md={3}
          value={props.childData.learning_from}
          onChange={(element) => {
            props.insertData(props.index, "learning_from", element);
          }}
        />
        <FieldDate
          idname={"trainTo" + props.index}
          label="TO"
          type="date"
          format="MM/dd/yyyy"
          md={3}
          value={props.childData.learning_to}
          onChange={(element) => {
            props.insertData(props.index, "learning_to", element);
          }}
        />
        <FormField
          idname={"trainHours" + props.index}
          label="NO OF HOURS"
          md={3}
          value={props.childData.learning_hours}
          onChange={(element) => {
            props.insertData(
              props.index,
              "learning_hours",
              element.target.value
            );
          }}
        />
        <FormField
          idname={"trainType" + props.index}
          label="TYPE OF L&D"
          md={3}
          value={props.childData.learning_type}
          onChange={(element) => {
            props.insertData(
              props.index,
              "learning_type",
              element.target.value
            );
          }}
        />
        <FormField
          idname={"trainSponsor" + props.index}
          label="CONDUCTED SPONSOR"
          md={6}
          value={props.childData.learning_sponsor}
          onChange={(element) => {
            props.insertData(
              props.index,
              "learning_sponsor",
              element.target.value
            );
          }}
        />
      </Grid>
    </CustomCard>
  );
}

export function ChildrenField(props) {
  return (
    <CustomCard removeMe={() => props.onRemoveChild(props.index)}>
      <FormField
        idname={"childrenName" + props.index}
        label="NAME OF CHILDREN"
        md={9}
        value={props.childData.name}
        onChange={(element) => {
          props.insertData(props.index, "name", element.target.value);
        }}
      />
      <FieldDate
        md={3}
        idname={"childbday" + props.index}
        label="DATE OF BIRTH"
        type="date"
        format="MM/dd/yyyy"
        value={props.childData.date_birth}
        onChange={(element) => {
          props.insertData(props.index, "date_birth", element);
        }}
      />
    </CustomCard>
  );
}

export function VocationalField(props) {
  return (
    <CustomCard removeMe={() => props.onRemoveChild(props.index)}>
      <Grid container spacing={2} key={props.key} index={props.index}>
        <Grid item xs={11} md={11} sm={11}>
          <Grid container spacing={2}>
            <FormField
              idname={"vocationalSchool" + props.index}
              label="SCHOOL NAME"
              value={props.childData.vocational_school}
              onChange={(element) => {
                props.insertData(
                  props.index,
                  "vocational_school",
                  element.target.value
                );
              }}
            />
            <FormField
              idname={"vocationalDegree" + props.index}
              label="BASIC EDUCATION/ DEGREE/ COURSE"
              value={props.childData.vocational_degree}
              onChange={(element) => {
                props.insertData(
                  props.index,
                  "vocational_degree",
                  element.target.value
                );
              }}
            />
            <FieldDate
              idname={"vocationalFrom" + props.index}
              label="FROM"
              views={["year"]}
              type="date"
              format="yyyy"
              value={props.childData.vocational_from}
              onChange={(element) => {
                props.insertData(props.index, "vocational_from", element);
              }}
            />
            <FieldDate
              idname={"vocationalTo" + props.index}
              label="TO"
              views={["year"]}
              type="date"
              format="yyyy"
              value={props.childData.vocational_to}
              onChange={(element) => {
                props.insertData(props.index, "vocational_to", element);
              }}
            />
            <FormField
              idname={"vocationalLevel" + props.index}
              label="HIGHEST LEVEL/ UNITS EARNED"
              value={props.childData.vocational_level}
              onChange={(element) => {
                props.insertData(
                  props.index,
                  "vocational_level",
                  element.target.value
                );
              }}
            />
            <FieldDate
              idname={"vocationalYear" + props.index}
              label="YEAR GRADUATED"
              views={["year"]}
              type="date"
              format="yyyy"
              value={props.childData.vocational_year}
              onChange={(element) => {
                props.insertData(props.index, "vocational_year", element);
              }}
            />
            <FormField
              idname={"vocationalHonor" + props.index}
              label="SCHOLARSHIP/ ACADEMIC HONORS RECEIVED"
              md={6}
              value={props.childData.vocational_honor}
              onChange={(element) => {
                props.insertData(
                  props.index,
                  "vocational_honor",
                  element.target.value
                );
              }}
            />
          </Grid>
        </Grid>
      </Grid>
    </CustomCard>
  );
}

export function CollegeField(props) {
  return (
    <CustomCard removeMe={() => props.onRemoveChild(props.index)}>
      <Grid container spacing={2} key={props.key}>
        <FormField
          idname={"collegeSchool" + props.index}
          label="SCHOOL NAME"
          value={props.childData.college_school}
          onChange={(element) => {
            props.insertData(
              props.index,
              "college_school",
              element.target.value
            );
          }}
        />
        <FormField
          idname={"collegeDegree" + props.index}
          label="BASIC EDUCATION/ DEGREE/ COURSE"
          value={props.childData.college_degree}
          onChange={(element) => {
            props.insertData(
              props.index,
              "college_degree",
              element.target.value
            );
          }}
        />
        <FieldDate
          idname={"collegeFrom" + props.index}
          label="FROM"
          views={["year"]}
          type="date"
          format="yyyy"
          value={props.childData.college_from}
          onChange={(element) => {
            props.insertData(props.index, "college_from", element);
          }}
        />
        <FieldDate
          idname={"collegeTo" + props.index}
          label="TO"
          views={["year"]}
          type="date"
          format="yyyy"
          value={props.childData.college_to}
          onChange={(element) => {
            props.insertData(props.index, "college_to", element);
          }}
        />
        <FormField
          idname={"collegeLevel" + props.index}
          label="HIGHEST LEVEL/ UNITS EARNED"
          value={props.childData.college_level}
          onChange={(element) => {
            props.insertData(
              props.index,
              "college_level",
              element.target.value
            );
          }}
        />
        <FieldDate
          idname={"collegeYear" + props.index}
          label="YEAR GRADUATED"
          views={["year"]}
          type="date"
          format="yyyy"
          value={props.childData.college_year}
          onChange={(element) => {
            props.insertData(props.index, "college_year", element);
          }}
        />
        <FormField
          idname={"collegeHonor" + props.index}
          label="SCHOLARSHIP/ ACADEMIC HONORS RECEIVED"
          md={6}
          value={props.childData.college_honor}
          onChange={(element) => {
            props.insertData(
              props.index,
              "college_honor",
              element.target.value
            );
          }}
        />
      </Grid>
    </CustomCard>
  );
}

export function GraduateField(props) {
  return (
    <CustomCard removeMe={() => props.onRemoveChild(props.index)}>
      <Grid container spacing={2} key={props.key}>
        <FormField
          idname={"graduateSchool" + props.index}
          label="SCHOOL NAME"
          value={props.childData.graduate_school}
          onChange={(element) => {
            props.insertData(
              props.index,
              "graduate_school",
              element.target.value
            );
          }}
        />
        <FormField
          idname={"graduateDegree" + props.index}
          label="BASIC EDUCATION/ DEGREE/ COURSE"
          value={props.childData.graduate_degree}
          onChange={(element) => {
            props.insertData(
              props.index,
              "graduate_degree",
              element.target.value
            );
          }}
        />
        <FieldDate
          idname={"graduateFrom" + props.index}
          label="FROM"
          views={["year"]}
          type="date"
          format="yyyy"
          value={props.childData.graduate_from}
          onChange={(element) => {
            props.insertData(props.index, "graduate_from", element);
          }}
        />
        <FieldDate
          idname={"graduateTo" + props.index}
          label="TO"
          views={["year"]}
          type="date"
          format="yyyy"
          value={props.childData.graduate_to}
          onChange={(element) => {
            props.insertData(props.index, "graduate_to", element);
          }}
        />
        <FormField
          idname={"graduateLevel" + props.index}
          label="HIGHEST LEVEL/ UNITS EARNED"
          value={props.childData.graduate_level}
          onChange={(element) => {
            props.insertData(
              props.index,
              "graduate_level",
              element.target.value
            );
          }}
        />
        <FieldDate
          idname={"graduateYear" + props.index}
          label="YEAR GRADUATED"
          views={["year"]}
          type="date"
          format="yyyy"
          value={props.childData.graduate_year}
          onChange={(element) => {
            props.insertData(props.index, "graduate_year", element);
          }}
        />
        <FormField
          idname={"graduateHonor" + props.index}
          label="SCHOLARSHIP/ ACADEMIC HONORS RECEIVED"
          md={6}
          value={props.childData.graduate_honor}
          onChange={(element) => {
            props.insertData(
              props.index,
              "graduate_honor",
              element.target.value
            );
          }}
        />
      </Grid>
    </CustomCard>
  );
}
