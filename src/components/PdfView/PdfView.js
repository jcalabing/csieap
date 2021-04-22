import React, { useState, useEffect, useRef } from "react";
import { degrees, PDFDocument, rgb, StandardFonts } from "pdf-lib";
import pdfitem from "./PDSForm.pdf";

const PdfView = (props) => {
  const [pdfInfo, setPdfInfo] = useState([]);
  const { jsonData } = props;
  useEffect(() => {
    modifyPdf();
  }, []);

  const viewer = useRef(null);

  const modifyPdf = async () => {
    const formUrl = pdfitem;
    const existingPdfBytes = await fetch(formUrl).then((res) =>
      res.arrayBuffer()
    );

    const pdfDoc = await PDFDocument.load(existingPdfBytes);
    const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);

    const pages = pdfDoc.getPages();
    const form = pdfDoc.getForm();
    form.getTextField("surname").setText(jsonData["surname"]);
    form.getTextField("firstname").setText(jsonData["firstname"]);

    form.getTextField("middlename").setText(jsonData["middlename"]);
    form.getTextField("extension").setText(jsonData["extension"]);
    form.getTextField("date_birth").setText(jsonData["date_birth"]);
    form.getTextField("place_birth").setText(jsonData["place_birth"]);

    form.getRadioGroup("sex").select(jsonData["sex"]);
    form.getRadioGroup("civil_status").select(jsonData["civil_status"]);

    form.getTextField("height").setText(jsonData["height"]);
    form.getTextField("weight").setText(jsonData["weight"]);
    form.getTextField("blood_type").setText(jsonData["blood_type"]);
    form.getTextField("gsis").setText(jsonData["gsis"]);
    form.getTextField("pagibig").setText(jsonData["pagibig"]);
    form.getTextField("philhealth").setText(jsonData["philhealth"]);
    form.getTextField("sss").setText(jsonData["sss"]);
    form.getTextField("tin").setText(jsonData["tin"]);
    form.getTextField("employee_no").setText(jsonData["employee_no"]);

    form.getRadioGroup("citizenship").select(jsonData["citizenship"]);
    form.getRadioGroup("dual_citizenship").select(jsonData["dual_citizenship"]);

    form.getTextField("country").setText(jsonData["country"]);
    form
      .getTextField("residential_house")
      .setText(jsonData["residential_house"]);
    form
      .getTextField("residential_street")
      .setText(jsonData["residential_street"]);
    form
      .getTextField("residential_village")
      .setText(jsonData["residential_village"]);
    form
      .getTextField("residential_barangay")
      .setText(jsonData["residential_barangay"]);
    form.getTextField("residential_city").setText(jsonData["residential_city"]);
    form
      .getTextField("residential_province")
      .setText(jsonData["residential_province"]);
    form.getTextField("residential_zip").setText(jsonData["residential_zip"]);
    form.getTextField("permanent_house").setText(jsonData["permanent_house"]);
    form.getTextField("permanent_street").setText(jsonData["permanent_street"]);
    form
      .getTextField("permanent_village")
      .setText(jsonData["permanent_village"]);
    form
      .getTextField("permanent_barangay")
      .setText(jsonData["permanent_barangay"]);
    form.getTextField("permanent_city").setText(jsonData["permanent_city"]);
    form
      .getTextField("permanent_province")
      .setText(jsonData["permanent_province"]);
    form.getTextField("permanent_zip").setText(jsonData["permanent_zip"]);
    form.getTextField("telephone").setText(jsonData["telephone"]);
    form.getTextField("mobile").setText(jsonData["mobile"]);
    form.getTextField("email").setText(jsonData["email"]);
    form.getTextField("spouse_surname").setText(jsonData["spouse_surname"]);
    form.getTextField("spouse_firstname").setText(jsonData["spouse_firstname"]);
    form
      .getTextField("spouse_middlename")
      .setText(jsonData["spouse_middlename"]);
    form.getTextField("spouse_extension").setText(jsonData["spouse_extension"]);
    form
      .getTextField("spouse_occupation")
      .setText(jsonData["spouse_occupation"]);
    form.getTextField("spouse_business").setText(jsonData["spouse_business"]);
    form
      .getTextField("spouse_business_address")
      .setText(jsonData["spouse_business_address"]);
    form.getTextField("spouse_telephone").setText(jsonData["spouse_telephone"]);
    form.getTextField("father_surname").setText(jsonData["father_surname"]);
    form.getTextField("father_firstname").setText(jsonData["father_firstname"]);
    form
      .getTextField("father_middlename")
      .setText(jsonData["father_middlename"]);
    form.getTextField("father_extension").setText(jsonData["father_extension"]);
    form.getTextField("mother_surname").setText(jsonData["mother_surname"]);
    form.getTextField("mother_firstname").setText(jsonData["mother_firstname"]);
    form
      .getTextField("mother_middlename")
      .setText(jsonData["mother_middlename"]);

    var oldeligibilityList = [];
    var eligibilityList = oldeligibilityList.concat(jsonData["eligibility"]);

    eligibilityList.reverse();
    for (var i = 0; i <= eligibilityList.length - 1; i += 1) {
      if (i === 7) break;
      form
        .getTextField("eligibility" + i)
        .setText(eligibilityList[i]["eligibility"]);
      form
        .getTextField("eligibility_date" + i)
        .setText(eligibilityList[i]["eligibility_date"]);
      form
        .getTextField("eligibility_number" + i)
        .setText(eligibilityList[i]["eligibility_number"]);
      form
        .getTextField("eligibility_place" + i)
        .setText(eligibilityList[i]["eligibility_place"]);
      form
        .getTextField("eligibility_rating" + i)
        .setText(eligibilityList[i]["eligibility_rating"]);
      form
        .getTextField("eligibility_validity" + i)
        .setText(eligibilityList[i]["eligibility_validity"]);
    }

    form.getTextField("elementary_name").setText(jsonData["elementary_name"]);
    form.getTextField("elementary_basic").setText(jsonData["elementary_basic"]);
    form.getTextField("elementary_from").setText(jsonData["elementary_from"]);
    form.getTextField("elementary_to").setText(jsonData["elementary_to"]);
    form.getTextField("elementary_level").setText(jsonData["elementary_level"]);
    form.getTextField("elementary_year").setText(jsonData["elementary_year"]);
    form.getTextField("elementary_honor").setText(jsonData["elementary_honor"]);
    form.getTextField("secondary_name").setText(jsonData["secondary_name"]);
    form.getTextField("secondary_basic").setText(jsonData["secondary_basic"]);
    form.getTextField("secondary_from").setText(jsonData["secondary_from"]);
    form.getTextField("secondary_to").setText(jsonData["secondary_to"]);
    form.getTextField("secondary_level").setText(jsonData["secondary_level"]);
    form.getTextField("secondary_year").setText(jsonData["secondary_year"]);
    form.getTextField("secondary_honor").setText(jsonData["secondary_honor"]);

    if (jsonData["vocational"].length) {
      const vIndex = jsonData["vocational"].length - 1;
      form
        .getTextField("vocational_school")
        .setText(jsonData["vocational"][vIndex]["vocational_school"]);
      form
        .getTextField("vocational_degree")
        .setText(jsonData["vocational"][vIndex]["vocational_degree"]);
      form
        .getTextField("vocational_from")
        .setText(jsonData["vocational"][vIndex]["vocational_from"]);
      form
        .getTextField("vocational_to")
        .setText(jsonData["vocational"][vIndex]["vocational_to"]);
      form
        .getTextField("vocational_level")
        .setText(jsonData["vocational"][vIndex]["vocational_level"]);
      form
        .getTextField("vocational_year")
        .setText(jsonData["vocational"][vIndex]["vocational_year"]);
      form
        .getTextField("vocational_honor")
        .setText(jsonData["vocational"][vIndex]["vocational_honor"]);
    }

    if (jsonData["college"].length) {
      const vIndex = jsonData["college"].length - 1;
      form
        .getTextField("college_school")
        .setText(jsonData["college"][vIndex]["college_school"]);
      form
        .getTextField("college_degree")
        .setText(jsonData["college"][vIndex]["college_degree"]);
      form
        .getTextField("college_from")
        .setText(jsonData["college"][vIndex]["college_from"]);
      form
        .getTextField("college_to")
        .setText(jsonData["college"][vIndex]["college_to"]);
      form
        .getTextField("college_level")
        .setText(jsonData["college"][vIndex]["college_level"]);
      form
        .getTextField("college_year")
        .setText(jsonData["college"][vIndex]["college_year"]);
      form
        .getTextField("college_honor")
        .setText(jsonData["college"][vIndex]["college_honor"]);
    }

    if (jsonData["graduate"].length) {
      const vIndex = jsonData["graduate"].length - 1;
      form
        .getTextField("graduate_school")
        .setText(jsonData["graduate"][vIndex]["graduate_school"]);
      form
        .getTextField("graduate_degree")
        .setText(jsonData["graduate"][vIndex]["graduate_degree"]);
      form
        .getTextField("graduate_from")
        .setText(jsonData["graduate"][vIndex]["graduate_from"]);
      form
        .getTextField("graduate_to")
        .setText(jsonData["graduate"][vIndex]["graduate_to"]);
      form
        .getTextField("graduate_level")
        .setText(jsonData["graduate"][vIndex]["graduate_level"]);
      form
        .getTextField("graduate_year")
        .setText(jsonData["graduate"][vIndex]["graduate_year"]);
      form
        .getTextField("graduate_honor")
        .setText(jsonData["graduate"][vIndex]["graduate_honor"]);
    }

    var oldEligibilityList = [];
    var eligibilityList = oldEligibilityList.concat(jsonData["eligibility"]);

    eligibilityList.reverse();
    for (var i = 0; i <= eligibilityList.length - 1; i += 1) {
      if (i === 7) break;
      form
        .getTextField("eligibility" + i)
        .setText(eligibilityList[i]["eligibility"]);
      form
        .getTextField("eligibility_number" + i)
        .setText(eligibilityList[i]["eligibility_number"]);
      form
        .getTextField("eligibility_place" + i)
        .setText(eligibilityList[i]["eligibility_place"]);
      form
        .getTextField("eligibility_rating" + i)
        .setText(eligibilityList[i]["eligibility_rating"]);
      form
        .getTextField("eligibility_validity" + i)
        .setText(eligibilityList[i]["eligibility_validity"]);
      form
        .getTextField("eligibility_date" + i)
        .setText(eligibilityList[i]["eligibility_date"]);
    }

    var oldWorkList = [];
    var workList = oldWorkList.concat(jsonData["work"]);

    workList.reverse();
    for (var i = 0; i <= workList.length - 1; i += 1) {
      if (i === 28) break;
      form.getTextField("work_agency" + i).setText(workList[i]["work_agency"]);
      form.getTextField("work_from" + i).setText(workList[i]["work_from"]);
      form.getTextField("work_grade" + i).setText(workList[i]["work_grade"]);
      form.getTextField("work_isgov" + i).setText(workList[i]["work_isgov"]);
      form.getTextField("work_salary" + i).setText(workList[i]["work_salary"]);
      form.getTextField("work_status" + i).setText(workList[i]["work_status"]);
      form.getTextField("work_title" + i).setText(workList[i]["work_title"]);
      form.getTextField("work_to" + i).setText(workList[i]["work_to"]);
    }

    var oldVoluntaryList = [];
    var voluntaryList = oldVoluntaryList.concat(jsonData["voluntary"]);

    voluntaryList.reverse();
    for (var i = 0; i <= voluntaryList.length - 1; i += 1) {
      if (i === 7) break;
      form
        .getTextField("voluntary_from" + i)
        .setText(voluntaryList[i]["voluntary_from"]);
      form
        .getTextField("voluntary_hours" + i)
        .setText(voluntaryList[i]["voluntary_hours"]);
      form
        .getTextField("voluntary_info" + i)
        .setText(voluntaryList[i]["voluntary_info"]);
      form
        .getTextField("voluntary_nature" + i)
        .setText(voluntaryList[i]["voluntary_nature"]);
      form
        .getTextField("voluntary_to" + i)
        .setText(voluntaryList[i]["voluntary_to"]);
    }

    var oldLearningList = [];
    var learningList = oldLearningList.concat(jsonData["learning"]);

    learningList.reverse();
    for (var i = 0; i <= learningList.length - 1; i += 1) {
      if (i === 17) break;
      form
        .getTextField("learning_from" + i)
        .setText(learningList[i]["learning_from"]);
      form
        .getTextField("learning_hours" + i)
        .setText(learningList[i]["learning_hours"]);
      form
        .getTextField("learning_sponsor" + i)
        .setText(learningList[i]["learning_sponsor"]);
      form
        .getTextField("learning_title" + i)
        .setText(learningList[i]["learning_title"]);
      form
        .getTextField("learning_to" + i)
        .setText(learningList[i]["learning_to"]);
      form
        .getTextField("learning_type" + i)
        .setText(learningList[i]["learning_type"]);
    }

    var oldHobbyList = [];
    var hobbyList = oldHobbyList.concat(jsonData["hobby"]);

    hobbyList.reverse();
    for (var i = 0; i <= hobbyList.length - 1; i += 1) {
      if (i === 7) break;
      form
        .getTextField("hobby_association" + i)
        .setText(hobbyList[i]["hobby_association"]);
      form.getTextField("hobby_name" + i).setText(hobbyList[i]["hobby_name"]);
      form
        .getTextField("hobby_recognition" + i)
        .setText(hobbyList[i]["hobby_recognition"]);
    }

    form.getRadioGroup("related_third").select(jsonData["related_third"]);
    form.getRadioGroup("related_fourth").select(jsonData["related_fourth"]);
    form.getTextField("related_detail").setText(jsonData["related_detail"]);

    form.getRadioGroup("guilty").select(jsonData["guilty"]);
    form.getTextField("guilty_detail").setText(jsonData["guilty_detail"]);

    form.getRadioGroup("charged").select(jsonData["charged"]);
    form.getTextField("charged_date").setText(jsonData["charged_date"]);
    form.getTextField("charged_status").setText(jsonData["charged_status"]);

    form.getRadioGroup("convicted").select(jsonData["convicted"]);
    form.getTextField("convicted_detail").setText(jsonData["convicted_detail"]);

    form
      .getRadioGroup("separated_service")
      .select(jsonData["separated_service"]);
    form
      .getTextField("separated_service_detail")
      .setText(jsonData["separated_service_detail"]);

    form.getRadioGroup("candidate").select(jsonData["candidate"]);
    form.getTextField("candidate_detail").setText(jsonData["candidate_detail"]);

    form
      .getRadioGroup("resign_for_campaign")
      .select(jsonData["resign_for_campaign"]);
    form
      .getTextField("resign_for_campaign_detail")
      .setText(jsonData["resign_for_campaign_detail"]);

    form.getRadioGroup("immigrant").select(jsonData["immigrant"]);
    form.getTextField("immigrant_detail").setText(jsonData["immigrant_detail"]);

    form.getRadioGroup("indigenous_group").select(jsonData["indigenous_group"]);
    form
      .getTextField("indigenous_group_detail")
      .setText(jsonData["indigenous_group_detail"]);

    form.getRadioGroup("disability").select(jsonData["disability"]);
    form.getTextField("disability_id").setText(jsonData["disability_id"]);

    form.getRadioGroup("solo_parent").select(jsonData["solo_parent"]);
    form.getTextField("solo_parent_id").setText(jsonData["solo_parent_id"]);

    var oldReferenceList = [];
    var referenceList = oldReferenceList.concat(jsonData["reference"]);

    referenceList.reverse();
    for (var i = 0; i <= referenceList.length - 1; i += 1) {
      if (i === 3) break;
      form
        .getTextField("reference_address" + i)
        .setText(referenceList[i]["reference_address"]);
      form
        .getTextField("reference_name" + i)
        .setText(referenceList[i]["reference_name"]);
      form
        .getTextField("reference_telephone" + i)
        .setText(referenceList[i]["reference_telephone"]);
    }

    form.getTextField("issued_detail").setText(jsonData["issued_detail"]);
    form.getTextField("issued_id").setText(jsonData["issued_id"]);
    form.getTextField("issued_id_number").setText(jsonData["issued_id_number"]);

    form.flatten();
    const pdfBytes = await pdfDoc.save();
    var bytes = new Uint8Array(pdfBytes);
    var blob = new Blob([bytes], { type: "application/pdf" });
    const docUrl = URL.createObjectURL(blob);
    setPdfInfo(docUrl);
  };

  return (
    <>
      {
        <iframe
          title="test-frame"
          src={pdfInfo}
          ref={viewer}
          type="application/pdf"
          width="100%"
          height="100%"
        />
      }
    </>
  );
};

export default PdfView;
