<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=Edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <title>CDR Clause Picker</title>
  <!-- Office JavaScript API -->
  <script type="text/javascript" src="https://appsforoffice.microsoft.com/lib/1.1/hosted/office.js"></script>

  <!-- For more information on Fluent UI, visit https://developer.microsoft.com/fluentui#/. -->
  <link rel="stylesheet" href="https://static2.sharepointonline.com/files/fabric/office-ui-fabric-core/11.0.0/css/fabric.min.css" />
  <link rel="stylesheet" type="text/css" href="taskpane.css" />

  <style>
    /* CSS styles */
    .ms-welcome__header {
      padding: 10px;
      margin-bottom: 20px;
    }
              #header {
    background: white;
    text-align: center;
    padding: 20px 0; /* adjust as needed */
}

#header img {
    max-width: 120px; /* keeps it crisp without overwhelming the pane */
}
  </style>
</head>
<body class="ms-font-m ms-welcome ms-Fabric">
    <header class="ms-welcome__header ms-bgColor-neutralLighter">
        <img width="60" height="60" src="https://incandescent-starlight-04c202.netlify.app/assets/logo-filled.png" alt="CDR Law" title="CDR Law"/>
    </header>
    <main id="app-body" class="ms-welcome__main">
        <div class="category">
            <div class="category-toggle">Header (no clauses)</div>
            <div class="category-content">
                <p class="clause-item">This is a placeholder for Header clauses, if any.</p>
            </div>
        </div>
<div class="category">
    <div class="category-toggle">Recitals</div>
    <div class="category-content">

        <div class="subcategory">
            <div class="subcategory-toggle">Standard Provisos</div>
            <div class="subcategory-content">
                <p class="clause-item">This proceeding is before the Court for determination following [conciliation/mediation/a settlement conference] and the parties having reached an [interim] agreement through [mediation/the conciliation process/the settlement conference];</p>
                <p class="clause-item">[Or]</p>
                <p class="clause-item">This proceeding is before the Court for determination following [conciliation/mediation/a settlement conference] and the parties having reached an agreement through [mediation/the conciliation process/the settlement conference] to [vary the provisions of the] [Corollary Relief Order/Consent Order/Variation Order] issued on [date];</p>
                <p class="clause-item">[Or]</p>
                <p class="clause-item">This proceeding is before the Court for determination following a hearing of the matter.</p>
                <p class="clause-item">Proof of service of the notice has been established and the application [and response] [and evidence presented by affidavit] have been considered.</p>
            </div>
        </div>

        <div class="subcategory">
            <div class="subcategory-toggle">Optional Provisos – Children</div>
            <div class="subcategory-content">
                <p class="clause-item">[if there are children]</p>
                <p class="clause-item">The parties, who are [not] married, have the following child(ren):</p>
                <p class="clause-item">Name of Child&nbsp;&nbsp;&nbsp;Date of Birth</p>
                <p class="clause-item">[add if applicable]</p>
                <p class="clause-item">The [applicant/petitioner/respondent], [name], acknowledges that he is [the father/a possible father] of the child(ren):</p>
                <p class="clause-item">Name of Child&nbsp;&nbsp;&nbsp;Date of Birth</p>
                <p class="clause-item">[add if applicable]</p>
                <p class="clause-item">The [applicant/petitioner/respondent], [name], hereby reserves his right to challenge the issue of paternity, upon application, at a later date.</p>
            </div>
        </div>

        <div class="subcategory">
            <div class="subcategory-toggle">Leave</div>
            <div class="subcategory-content">
                <p class="clause-item">The [applicant/petitioner/respondent], [name of party seeking leave], [describe connection of party seeking leave to the child(ren)] has applied for leave to apply for [decision-making responsibility for and/or parenting time with] the child(ren):</p>
                <p class="clause-item">Name of Child&nbsp;&nbsp;&nbsp;Date of Birth</p>
                <p class="clause-item">And the [applicant/petitioner/respondent], [name of other party], are agreeable to the [applicant/petitioner/respondent], [name of party seeking leave], being granted such leave as a result of the [applicant/petitioner/respondent], [name of party seeking leave], having [the care of the child(ren)/other circumstances];</p>
            </div>
        </div>

        <div class="subcategory">
            <div class="subcategory-toggle">Income</div>
            <div class="subcategory-content">
                <p class="clause-item">[add if child support is to be paid]</p>
                <p class="clause-item">The [applicant/petitioner/respondent], [name of party paying], is found to have an annual income of $ [amount].</p>
                <p class="clause-item">[Or]</p>
                <p class="clause-item">[Income/Average Income for Table Amount]</p>
                <p class="clause-item">The [applicant/petitioner/respondent], [name of party paying], has an annual income of $ [amount] for the purpose of determining the table amount of child support, [calculated as an average of his/her employment income earned] from [employment name] for the years: [list years];</p>
                <p class="clause-item">[Or]</p>
                <p class="clause-item">[Self-Employed Income]</p>
                <p class="clause-item">The [applicant/petitioner/respondent], [name of party paying] is self-employed as a(n) [occupation], earning variable amounts of income, throughout the year, and from year to year, and upon the parties agreeing that, on average, the [applicant/petitioner/respondent], [name of party paying], earns an annual income of $ [amount] for the purpose of determining the table amount of child support;</p>
                <p class="clause-item">[Or]</p>
                <p class="clause-item">[Reasonable Arrangements]</p>
                <p class="clause-item">The parties wish to enter into reasonable arrangements for the payment of child support, by virtue of the [applicant/petitioner/respondent], [name of party paying], paying the following expenses that the parties agree directly or indirectly benefit the child(ren): [list expenses].</p>
                <p class="clause-item">[Or]</p>
                <p class="clause-item">The parties agree that reasonable arrangements have been made for the child(ren) so that the amount of child support to be paid is lower than the table amount pursuant to the Federal/Provincial Child Support Guidelines and in accordance with Section [17 (6.5) {if variation}/ 15.1(7) {if originating} of the Divorce Act / 10(5) of the Parenting and Support Act].</p>
                <p class="clause-item">[add if child support includes special expenses]</p>
                <p class="clause-item">For the purpose of making an order for payment of special or extraordinary expenses the [applicant/petitioner/respondent], [name of recipient], is found to have an annual income of $ [amount].</p>
                <p class="clause-item">[Or]</p>
                <p class="clause-item">[replace the two income clauses with the following if applicable]</p>
                <p class="clause-item">For the purpose of making an order for payment of child support, in an amount other than the table amount and special or extraordinary expenses, the [applicant/petitioner/respondent], [name of party paying], is found to have an annual income of $ [amount] and [name of recipient] is found to have an annual income of $ [amount];</p>
                <p class="clause-item">[Or]</p>
                <p class="clause-item">[Imputation of Income]</p>
                <p class="clause-item">The [applicant/petitioner/respondent], [name], has failed to provide income information when required by the [order/notice] dated and [his/her] annual income is imputed to be $ [amount] for the purpose of determining the table amount of child support.</p>
            </div>
        </div>

    </div>
</div>
<div class="category">
    <div class="category-toggle">Decision Making</div>
    <div class="category-content">
        <div class="subcategory">
            <div class="subcategory-toggle">Day to Day Decisions</div>
            <div class="subcategory-content">
                <p class="clause-item">Decisions related to the daily care of the child(ren) shall be made by the party caring for the child(ren) at the relevant time.</p>
            </div>
        </div>
        <div class="subcategory">
            <div class="subcategory-toggle">Joint Decision-making responsibility</div>
            <div class="subcategory-content">
                <p class="clause-item">Each of the parties shall meaningfully consult with the other on all major developmental decisions respecting the child(ren) related to health, education, religion, and general well-being.</p>
                <p class="clause-item">In the event that the parties are unable to reach agreement they shall:</p>
                <p class="clause-item">Seek the assistance of a mediator in an effort to resolve the matter under disagreement. The cost of said mediation shall be: [shared equally/paid in proportion to each party’s gross annual income];</p>
                <p class="clause-item">[Or]</p>
                <p class="clause-item">Consult with a third-party professional who provides care to the child(ren) and to follow the advice of the professional;</p>
                <p class="clause-item">[Or]</p>
                <p class="clause-item">Designate the [applicant/petitioner/respondent], [name], as having the ability to make the final decision.</p>
            </div>
        </div>
        <div class="subcategory">
            <div class="subcategory-toggle">Sole Decision-making responsibility</div>
            <div class="subcategory-content">
                <p class="clause-item">The [applicant/petitioner/respondent], [name], has sole decision-making responsibility for the child(ren) and has the right to make all decisions related to the child(ren) including major developmental decisions related to health, education, religion, and general well-being.</p>
            </div>
        </div>
        <div class="subcategory">
            <div class="subcategory-toggle">[Emergency Medical Decisions]</div>
            <div class="subcategory-content">
                <p class="clause-item">Each party shall have the independent power to solely authorize emergency medical care for the child(ren) and each party shall notify the other party of the emergency as soon as it is practical to do so considering the nature of the emergency.</p>
            </div>
        </div>
    </div>
</div>

 <div class="category">
    <div class="category-toggle">Information Access</div>
    <div class="category-content">
        <p class="clause-item">Each party shall be entitled to make inquiries and receive information from third party care providers for the child(ren). Such third-party care providers shall include the child’s daycare, school, health professionals (i.e. doctor, dentist), religious *.</p>
        <p class="clause-item">Each party shall be entitled to continue to be entitled to receive information relating to the child(ren), such as school report cards, medical reports, information regarding their recreational activities and the like;</p>
        <p class="clause-item">[access provision]</p>
        <p class="clause-item">and shall continue to be entitled to attend any functions and meetings relating to the child(ren) that parties are normally entitled to attend, such as school related events, medical and dental appointments, recreational activities, concerts and the like.</p>
    </div>
</div>

<div class="category">
    <div class="category-toggle">Attendance</div>
    <div class="category-content">
        <p class="clause-item">Both parties may attend the child(ren)'s appointments.</p>
        <p class="clause-item">Both parties may attend the child(ren)'s activities, such as concerts, recitals, games, practices, medical and dental.</p>
        <p class="clause-item">Both parties may attend the child(ren)’s functions, such as their birthday parties.</p>
        <p class="clause-item">Both parties may attend meetings relating to the child(ren), such as parent-teacher meetings.</p>
    </div>
</div>

<div class="category">
    <div class="category-toggle">Custody Upon a Party's Death</div>
    <div class="category-content">
        <p class="clause-item">Each party will make and maintain a valid Will providing the other party will be guardian of the child(ren)’s property on his or her death.</p>
    </div>
</div>
<div class="category">
    <div class="category-toggle">Communication</div>
    <div class="category-content">

        <div class="subcategory">
            <div class="subcategory-toggle">With the Child(ren)</div>
            <div class="subcategory-content">
                <p class="clause-item">Each party shall be entitled to communicate with the child(ren) at reasonable times by any means of communication, including: telephone, Facetime, Skype, etc.;</p>
                <p class="clause-item">[Or]</p>
                <p class="clause-item">Each party shall be entitled to communicate by telephone, Facetime or Skype with the child(ren) when they are in the care of the other parent at the following times: [specify times];</p>
                <p class="clause-item">[Or]</p>
                <p class="clause-item">Each party shall be entitled to communicate by telephone, Facetime or Skype with the child(ren) when they are in the care of the other parent at the following times and on the following conditions: [times and conditions];</p>
                <p class="clause-item">[Or]</p>
                <p class="clause-item">Unless there is an emergency, neither party shall communicate with the child(ren) when the child(ren) [is/are] in the care of the other party.</p>
            </div>
        </div>

        <div class="subcategory">
            <div class="subcategory-toggle">Child(ren) Communicating with Parent(s)</div>
            <div class="subcategory-content">
                <p class="clause-item">The child(ren) shall be entitled to communicate with either parent at any time.</p>
            </div>
        </div>

        <div class="subcategory">
            <div class="subcategory-toggle">Higher Conflict Situations</div>
            <div class="subcategory-content">
                <p class="clause-item">The parties shall keep a bound journal in which they shall share relevant information about everyday issues that may impact on the care and upbringing of the child(ren). The entries are to be in pen and dated. There is to be no redaction or alteration of the journal by either party. The entries shall be child focused and provide relevant information about the child(ren).</p>
                <p class="clause-item">The parties shall only communicate in writing (via e-mail or text) unless there is an emergency. In case of emergency only, the parties may communicate via telephone.</p>
                <p class="clause-item">The parties shall communicate in writing through a software program (i.e. Our Family Wizard) unless there is an emergency. In case of emergency only, the parties may communicate via telephone.</p>
            </div>
        </div>

    </div>
</div>
        
  <div class="category">
    <div class="category-toggle">Travel</div>
    <div class="category-content">

        <div class="subcategory">
            <div class="subcategory-toggle">Itinerary</div>
            <div class="subcategory-content">
                <p class="clause-item">The party intending to travel with the child(ren) shall provide an itinerary to the other party a minimum of [number] days prior to the intended travel.</p>
                <p class="clause-item">The itinerary shall contain the following information: dates of travel, place of travel, address during travel, contact information.</p>
            </div>
        </div>

        <div class="subcategory">
            <div class="subcategory-toggle">Domestic Travel Outside of the Province</div>
            <div class="subcategory-content">
                <p class="clause-item">Either party is entitled to travel domestically with the child(ren) within or outside of the Province so long as it does not interfere with the other party’s scheduled parenting time.</p>
                <p class="clause-item">A party wishing to travel domestically with the child(ren) outside of the Province shall [not need to] obtain the written consent of the other party.</p>
            </div>
        </div>

        <div class="subcategory">
            <div class="subcategory-toggle">International Travel</div>
            <div class="subcategory-content">
                <p class="clause-item">Each party shall provide the other a minimum of [number] days notice of any proposal to travel internationally with the child(ren) along with a proposed itinerary of travel.</p>
                <p class="clause-item">Consent to travel shall not be unreasonably withheld by either party if the proposed travel is in the child(ren)’s best interests.</p>
                <p class="clause-item">Both parties shall cooperate in signing any documentation required to facilitate the child(ren)’s international travel (i.e. travel consent letters).</p>
                <p class="clause-item">Both parties shall provide access to the child(ren)’s passport(s) to facilitate such travel a minimum of [number] days in advance of the proposed travel.</p>
                <p class="clause-item">Both parties shall cooperate in getting passport(s) for the child(ren) and ensuring that the passport(s) are kept valid and up to date.</p>
                <p class="clause-item">The passport(s) shall be in the primary care of the [applicant/petitioner/respondent], [name], until such time as they may be required by the other party for travel purposes.</p>
            </div>
        </div>

    </div>
</div>

<div class="category">
    <div class="category-toggle">Passports</div>
    <div class="category-content">
        <p class="clause-item">Both parties shall cooperate in getting passport(s) for the child(ren) and ensuring that the passport(s) are kept valid and up to date.</p>
        <p class="clause-item">The passport(s) shall be in the primary care of the [applicant/petitioner/respondent], [name], until such time as they may be required by the other party for travel purposes.</p>
    </div>
</div>
<div class="category">
    <div class="category-toggle">Holidays</div>
    <div class="category-content">

        <div class="subcategory">
            <div class="subcategory-toggle">Christmas</div>
            <div class="subcategory-content">
                <p class="clause-item">[Christmas]</p>
                <p class="clause-item">[add if dividing the Christmas school vacation]</p>
                <p class="clause-item">The parties shall equally divide the Christmas school vacation with one party having the first half of the Christmas school vacation and the other party having the second half of the Christmas school vacation each year. In even numbered years the [applicant/petitioner/respondent], [name], will have child(ren) in [his/her] care from the first full day of the Christmas school vacation until [time] on December [date].  The [applicant/petitioner/respondent], [name of other party], will have the child(ren) in [his/her] care from [date and time from above] until [time] on the last full day of the Christmas school vacation. This schedule will alternate in odd numbered years.</p>
                <p class="clause-item">[add if dividing the period December 24-26]</p>
                <p class="clause-item">The parties shall alternate the Christmas holiday period from December 24th to December 26th each year. The [applicant/petitioner/respondent], [name], shall have the child(ren) in [his/her] care from December 24th at [time] to December 25th at [time].  The [applicant/petitioner/respondent], [name of other party], shall have the child(ren) in [his/her] care from December 25th at [time from above] until December 26th at [time].</p>
                <p class="clause-item">[add if set time every Christmas]</p>
                <p class="clause-item">The [applicant/petitioner/respondent], [name], shall have Christmas parenting time each year from December [date] at [time] to December [date] at [time].</p>
            </div>
        </div>

        <div class="subcategory">
            <div class="subcategory-toggle">Summer Vacation</div>
            <div class="subcategory-content">
                <p class="clause-item">[Summer Vacation]</p>
                <p class="clause-item">Each party shall be entitled to [number] week(s) of block parenting time each summer.  These weeks shall [not] be consecutive. A week is defined as a [seven/ten] [(7)/(10)] day block of time. The block summer parenting time commences on [day] at [time] and ends on [day] at [time].</p>
                <p class="clause-item">The [applicant/petitioner/respondent], [name], shall have [his/her] choice of summer vacation weeks in even numbered years.  The [applicant/petitioner/respondent], [name of other party], shall have [his/her] choice of summer vacation weeks in odd numbered years.</p>
                <p class="clause-item">Each party shall advise the other of their choice of weeks by [date] each year.</p>
                <p class="clause-item">The parties shall have a week on/week off schedule during the months of July and August each year, commencing with the first full week in July and ending in the last full week of August. The transition day and time is [day] at [time].</p>
            </div>
        </div>

        <div class="subcategory">
            <div class="subcategory-toggle">Easter</div>
            <div class="subcategory-content">
                <p class="clause-item">[Easter]</p>
                <p class="clause-item">Easter weekend shall be defined as Thursday at [time] to Tuesday at the commencement of school or daycare.</p>
                <p class="clause-item">Easter weekend shall be defined as Friday at [time] to Sunday at [time].</p>
                <p class="clause-item">Easter weekend shall be defined as Friday at [time] to Monday at [time].</p>
                <p class="clause-item">[add if Easter is split every year]</p>
                <p class="clause-item">The [applicant/petitioner/respondent], [name], shall have the child(ren) in [his/her] care from [day] at [time] to [day] at [time]. The [applicant/petitioner/respondent], [name of other party], shall have the child(ren) in [his/her] care from [day] at [time] to [day] at [time].</p>
                <p class="clause-item">[add if Easter alternates every year]</p>
                <p class="clause-item">The [applicant/petitioner/respondent], [name], shall have the child(ren) in [his/her] care during Easter in even numbered years. The [applicant/petitioner/respondent], [name of other party], shall have the child(ren) in [his/her] care during Easter in odd numbered years.</p>
            </div>
        </div>

        <div class="subcategory">
            <div class="subcategory-toggle">Thanksgiving</div>
            <div class="subcategory-content">
                <p class="clause-item">[Thanksgiving]</p>
                <p class="clause-item">Thanksgiving shall be defined as Friday at [time]pm to Sunday at [time]pm.</p>
                <p class="clause-item">[Or]</p>
                <p class="clause-item">Thanksgiving shall be defined as Friday at [time]pm to Monday at [time]pm.</p>
                <p class="clause-item">Thanksgiving shall be defined as Friday at [time]pm to Tuesday at the commencement of school or daycare.</p>
                <p class="clause-item">[add if Thanksgiving is split every year]</p>
                <p class="clause-item">The [applicant/petitioner/respondent], [name], shall have the child(ren) in [his/her] care from [day] at [time] to [day] at [time]. The [applicant/petitioner/respondent], [name of other party], shall have the child(ren) in [his/her] care from [day] at [time] to [day] at [time].</p>
                <p class="clause-item">[add if Thanksgiving alternates every year]</p>
                <p class="clause-item">The [applicant/petitioner/respondent], [name], shall have the child(ren) in [his/her] care during Thanksgiving in even numbered years. The [applicant/petitioner/respondent], [name of other party], shall have the child(ren) in [his/her] care during Thanksgiving in odd numbered years.</p>
            </div>
        </div>

        <div class="subcategory">
            <div class="subcategory-toggle">March Break</div>
            <div class="subcategory-content">
                <p class="clause-item">[March Break]</p>
                <p class="clause-item">March Break shall be defined as a seven (7) day period from [day] to [day].</p>
                <p class="clause-item">March Break shall be defined as a ten (10) day period from Friday to Monday morning.</p>
                <p class="clause-item">[add if March Break is split every year]</p>
                <p class="clause-item">The [applicant/petitioner/respondent], [name], shall have the child(ren) in [his/her] care from Friday at [time] to Wednesday at [time].  The [applicant/petitioner/respondent], [name of other party], shall have the child(ren) in [his/her] care from Wednesday at [time] to [day] at [time].</p>
                <p class="clause-item">[add if March Break alternates every year]</p>
                <p class="clause-item">The [applicant/petitioner/respondent], [name], shall have the child(ren) in [his/her] care during March Break in even numbered years.  The [applicant/petitioner/respondent], [name of other party], shall have the child(ren) in [his/her] care during March Break in odd numbered years.</p>
            </div>
        </div>

        <div class="subcategory">
            <div class="subcategory-toggle">Mother’s and Father’s Day</div>
            <div class="subcategory-content">
                <p class="clause-item">[Mother’s and Father’s Day]</p>
                <p class="clause-item">Mother’s Day and Father’s Day shall be defined as Sunday from [time] to [time];</p>
                <p class="clause-item">[Or]</p>
                <p class="clause-item">Mother’s Day and Father’s Day shall be defined as Saturday from [time] to Sunday at [time];</p>
                <p class="clause-item">[Or]</p>
                <p class="clause-item">Mother’s Day and Father’s Day shall be defined as Saturday from [time] to Monday morning with return to school or daycare</p>
                <p class="clause-item">The child(ren) shall be in the care of the [applicant/petitioner/respondent], [name of father], on Father’s Day.</p>
                <p class="clause-item">The child(ren) shall be in the care of the [applicant/petitioner/respondent], [name of mother], on Mother’s Day.</p>
            </div>
        </div>

        <div class="subcategory">
            <div class="subcategory-toggle">Statutory Holidays</div>
            <div class="subcategory-content">
                <p class="clause-item">[Statutory Holidays]</p>
                <p class="clause-item">Should a statutory holiday fall on a day immediately preceding or following a parent’s scheduled weekend with the child(ren), the weekend shall be extended by a twenty four (24) hour period to include the statutory holiday.</p>
            </div>
        </div>

        <div class="subcategory">
            <div class="subcategory-toggle">Birthdays</div>
            <div class="subcategory-content">
                <p class="clause-item">[Birthdays]</p>
                <p class="clause-item">Child: Each parent shall be entitled to spend [amount of time] with the child, [child’s name], on their birthday.</p>
                <p class="clause-item">Parent: Each parent shall be entitled to spend [amount of time] with the child(ren) on [his/her] birthday.</p>
            </div>
        </div>

    </div>
</div>


 <div class="category">
    <div class="category-toggle">Grandparent</div>
    <div class="category-content">

        <div class="subcategory">
            <div class="subcategory-toggle">Decision-making responsibility</div>
            <div class="subcategory-content">
                <p class="clause-item">[Decision-making responsibility]</p>
                <p class="clause-item">With leave of the court, the [applicant/petitioner/respondent], [name of grandparent(s)], shall have decision-making responsibility for the following child(ren): [names and birth dates of child(ren)].</p>
                <p class="clause-item">With leave of the court, the [applicant/petitioner/respondent], [name of grandparent(s)], shall have joint decision-making responsibility with [name(s) of other parties with custodial rights] for the following child(ren): [names and birth dates of child(ren)].</p>
            </div>
        </div>

        <div class="subcategory">
            <div class="subcategory-toggle">Contact Time</div>
            <div class="subcategory-content">
                <p class="clause-item">[Contact Time]</p>
                <p class="clause-item">The [applicant/petitioner/respondent], [name of grandparent(s)], shall have contact time with the child(ren), [names and birth dates of child(ren)] at the following times [and subject to the following conditions]: [dates, times and conditions, if any, of contact time].</p>
            </div>
        </div>

        <div class="subcategory">
            <div class="subcategory-toggle">Interaction</div>
            <div class="subcategory-content">
                <p class="clause-item">[Interaction]</p>
                <p class="clause-item">The [applicant/petitioner/respondent], [name of grandparent(s)], shall have interaction with the child(ren), [names and birth dates of child(ren)] and are permitted to:</p>
                <p class="clause-item">(a) attend specified activities of the child(ren);</p>
                <p class="clause-item">(b) send gifts to and receive gifts from the child(ren);</p>
                <p class="clause-item">(c) communicate with the child(ren) whether orally, in writing or by other means; and</p>
                <p class="clause-item">(d) receive from a person designated in the order, photographs of the child(ren) and information regarding the health, education and well-being of the child(ren).</p>
            </div>
        </div>

    </div>
</div>

<div class="category">
    <div class="category-toggle">Parenting Arrangements</div>
    <div class="category-content">

        <div class="subcategory">
            <div class="subcategory-toggle">Primary Care</div>
            <div class="subcategory-content">
                <p class="clause-item">[Primary Care]</p>
                <p class="clause-item">The child(ren) shall have their primary residence with the [applicant/petitioner/respondent], [name].</p>
                <p class="clause-item">The [applicant/petitioner/respondent], [name of other party], shall have parenting time with the child(ren) according to the following schedule:</p>
                <p class="clause-item">Every second weekend from [day] at [time] to [day] at [time].</p>
                <p class="clause-item">[And/Or]</p>
                <p class="clause-item">On a two-week rotating schedule as follows:</p>
                <p class="clause-item">Week One: [day] at [time] to [day] at time].</p>
                <p class="clause-item">Week Two: [day] at [time] to [day] at [time].</p>
                <p class="clause-item">[And/Or]</p>
                <p class="clause-item">[Other dates and times].</p>
            </div>
        </div>

        <div class="subcategory">
            <div class="subcategory-toggle">Shared Parenting</div>
            <div class="subcategory-content">
                <p class="clause-item">[Shared Parenting]</p>
                <p class="clause-item">Week on/Week Off:</p>
                <p class="clause-item">The child(ren) shall spend equal amounts of time in both parties’ homes, on a week-on, week-off schedule, with exchanges to occur on [day] at [time].</p>
                <p class="clause-item">4/3/3/4:</p>
                <p class="clause-item">The child(ren) shall spend equal amounts of time in both parties’ homes, on a 4/3/3/4 schedule, such that the child(ren) shall be in the [applicant/petitioner/respondent]’s, [name]’s, care, commencing [date] for a period of four (4) overnights, in the [applicant/petitioner/respondent]’s, [name of other party]’s, care for the following three (3) overnights, in the [applicant/petitioner/respondent]’s, [first name]’s, care for the following three (3) overnights, and in the [applicant/petitioner/respondent]’s, [name of other party]’s, care for the following four (4) overnights and so on. Exchanges shall occur at [time].</p>
                <p class="clause-item">Other shared parenting schedule:</p>
                <p class="clause-item">The parties shall share parenting time with the children on the following schedule:</p>
                <p class="clause-item">The child(ren) shall be in the [applicant/petitioner/respondent]’s, [name]’s, care from [day] at [time] to [day] at [time].</p>
                <p class="clause-item">The child(ren) shall be in the [applicant/petitioner/respondent]’s, [name]’s, care from [day] at [time] to [day] at [time].</p>
            </div>
        </div>

        <div class="subcategory">
            <div class="subcategory-toggle">Supervised Parenting Time</div>
            <div class="subcategory-content">
                <p class="clause-item">[Supervised Parenting Time]</p>
                <p class="clause-item">[Third party]</p>
                <p class="clause-item">The [applicant/petitioner/respondent], [name], shall have supervised parenting time with the child(ren) supervised by a third party that may include [name agreed upon third party supervisor(s)] and any other third party as may be agreed from time to time;</p>
                <p class="clause-item">And</p>
                <p class="clause-item">The supervised parenting time shall occur at the following times: [day(s)] at [time(s)] to [day(s)] at [time(s)].</p>
                <p class="clause-item">[Or]</p>
                <p class="clause-item">As agreed and arranged between the parties and the third party supervisor.</p>
                <p class="clause-item">[Veith House]</p>
                <p class="clause-item">The [applicant/petitioner/respondent]’s, [name]’s, parenting time with the child(ren) shall be supervised, with visits to take place at Veith House, located at 3115 Veith Street, Halifax.</p>
                <p class="clause-item">The first three (3) visits shall be no more than one hour in length, and the remainder of the visits shall be for the maximum amount of time that Veith House will allow.</p>
                <p class="clause-item">The visits shall be at a minimum of once [per week/every two weeks/per month].</p>
                <p class="clause-item">No visits shall commence prior to [start date].</p>
                <p class="clause-item">The terms of this order with respect to the [applicant/petitioner/respondent]’s, [name]’s, parenting time with the child(ren) at Veith House may be renewed, following the expiry of this initial order, after twelve (12) visits have occurred.</p>
                <p class="clause-item">Either party may apply to the Court to seek a renewal of this order.</p>
                <p class="clause-item">This matter shall return to Court for a conference to be held on [date].</p>
            </div>
        </div>

        <div class="subcategory">
            <div class="subcategory-toggle">Contact Time</div>
            <div class="subcategory-content">
                <p class="clause-item">[Contact Time]</p>
                <p class="clause-item">The [applicant/petitioner/respondent], [name of non-parent/non-guardian party], shall have contact time with the child(ren), at the following times [and subject to the following conditions]: [dates, times and conditions, if any, of contact time].</p>
            </div>
        </div>

        <div class="subcategory">
            <div class="subcategory-toggle">Interaction</div>
            <div class="subcategory-content">
                <p class="clause-item">[Interaction]</p>
                <p class="clause-item">The [applicant/petitioner/respondent], [name], shall have interaction with the child(ren), and is permitted to:</p>
                <p class="clause-item">(a) attend specified activities of the child(ren);</p>
                <p class="clause-item">(b) send gifts to and receive gifts from the child(ren);</p>
                <p class="clause-item">(c) communicate with the child(ren) whether orally, in writing or by other means; and</p>
                <p class="clause-item">(d) receive from a person designated in the order, photographs of the child(ren) and information regarding the health, education and well-being of the child(ren).</p>
            </div>
        </div>

    </div>
</div>

<div class="category">
    <div class="category-toggle">General Clauses</div>
    <div class="category-content">

        <div class="subcategory">
            <div class="subcategory-toggle">Contact Information</div>
            <div class="subcategory-content">
                <p class="clause-item">[Contact Information]</p>
                <p class="clause-item">The parties agree to inform one another of any changes in his or her home address, home phone number, work address, work phone number, or any other means of contact such as fax numbers or e-mail addresses.</p>
            </div>
        </div>

        <div class="subcategory">
            <div class="subcategory-toggle">Scheduling Activities</div>
            <div class="subcategory-content">
                <p class="clause-item">[Scheduling Activities]</p>
                <p class="clause-item">Unless the other party agrees, neither party will schedule activities for the child(ren) during the other’s time with the child(ren). Neither party shall unreasonably withhold their consent to the scheduling of an activity.</p>
                <p class="clause-item">If the parties agree to an activity, both parties shall be responsible to ensure the child(ren) [is/are] transported to that activity, during their respective parenting time.</p>
            </div>
        </div>

        <div class="subcategory">
            <div class="subcategory-toggle">Decision-making responsibility Upon Death of a Party/Parent</div>
            <div class="subcategory-content">
                <p class="clause-item">[Decision-making responsibility Upon Death of a Party/Parent]</p>
                <p class="clause-item">If either of the parties die, the other will have decision-making responsibility of the child(ren) and be guardian of the child(ren)’s property. The parties will make Wills consistent with this order.</p>
            </div>
        </div>

        <div class="subcategory">
            <div class="subcategory-toggle">Right of First Refusal</div>
            <div class="subcategory-content">
                <p class="clause-item">[Right of First Refusal]</p>
                <p class="clause-item">During Work Hours:</p>
                <p class="clause-item">Both parties shall be entitled to a right of first refusal to provide care for the child(ren) during those periods of time when one party is working and the other party is not working.</p>
                <p class="clause-item">Outside of Work Hours:</p>
                <p class="clause-item">The [applicant/petitioner/respondent], [name], shall be entitled to a right of first refusal to provide care for the child(ren) in preference to a babysitter or child caregiver if the [applicant/petitioner/respondent], [name], is unavailable to care for the child(ren) for a period exceeding [number] of hours.</p>
                <p class="clause-item">Grandparents:</p>
                <p class="clause-item">This clause does not apply to reasonable time the child(ren) may spend in the care of their grandparents.</p>
            </div>
        </div>

        <div class="subcategory">
            <div class="subcategory-toggle">Transportation</div>
            <div class="subcategory-content">
                <p class="clause-item">[Transportation]</p>
                <p class="clause-item">[Transportation Provided by Parties]</p>
                <p class="clause-item">The [applicant/petitioner/respondent], [name], shall transport the child(ren) to and from [the other parties’ home/specify location].</p>
                <p class="clause-item">The [applicant/petitioner/respondent], [name], shall pick the child(ren) up from [the other parties’ home/specify location] at the beginning of their parenting time, and the [applicant/petitioner/respondent], [name of other party], shall pick the child(ren) up from [the other parties’ home/specify location] at the beginning of their parenting time.</p>
                <p class="clause-item">The parties shall meet at a neutral location, [specify location], to exchange the child(ren).</p>
                <p class="clause-item">[Third Party Transport]</p>
                <p class="clause-item">The child(ren) shall be transported to and from the [applicant/petitioner/respondent]’s, [name]’s, home by an agreed upon third party,</p>
                <p class="clause-item">[add if restricted to certain people]</p>
                <p class="clause-item">which can include [name agreed upon third parties] and any other third party as may be agreed from time to time.</p>
                <p class="clause-item">[Veith House]</p>
                <p class="clause-item">The parties shall arrange to exchange the child(ren) through the supervised exchange program at Veith House. [Specify details].</p>
            </div>
        </div>

        <div class="subcategory">
            <div class="subcategory-toggle">Conditions and Restrictions</div>
            <div class="subcategory-content">
                <p class="clause-item">[Conditions and Restrictions]</p>
                <p class="clause-item">[Communication]</p>
                <p class="clause-item">Neither party shall speak negatively to, or about, the other party in the presence of the child(ren).</p>
                <p class="clause-item">Neither party shall discuss adult matters with the child(ren).</p>
                <p class="clause-item">The parties shall communicate in a civil manner and shall only discuss matters related to their child(ren).</p>
                <p class="clause-item">[Third Party]</p>
                <p class="clause-item">The parties shall communicate through the third party, [name of third party], or another third party agreed between them in advance.</p>
                <p class="clause-item">[Safety]</p>
                <p class="clause-item">The parties agree to comply with all provincial safety standards and regulations with respect to the child(ren)’s use of motor vehicles, including but not limited to ATVs or 4-wheelers.</p>
                <p class="clause-item">The parties agree to comply with all provincial laws and regulations with respect to the use of appropriate car seats for the child(ren).</p>
                <p class="clause-item">[Alcohol/Drugs]</p>
                <p class="clause-item">Neither party shall consume alcohol, or non-prescription drugs including marijuana, during their parenting time.</p>
                <p class="clause-item">[Or]</p>
                <p class="clause-item">Neither party shall consume alcohol, or non-prescription drugs including marijuana, during or [number] hours prior to their parenting time.</p>
                <p class="clause-item">[Or]</p>
                <p class="clause-item">Neither party shall consume alcohol to excess [during/number of hours prior to] their parenting time.</p>
                <p class="clause-item">[And/Or]</p>
                <p class="clause-item">Neither party shall consume marijuana to excess during or [number of hours prior to] their parenting time.</p>
                <p class="clause-item">[Corporal Punishment].</p>
            </div>
        </div>

    </div>
</div>

<div class="category">
    <div class="category-toggle">Child Support</div>
    <div class="category-content">

        <div class="subcategory">
            <div class="subcategory-toggle">Income</div>
            <div class="subcategory-content">
                <p class="clause-item">INCOME</p>
                <p class="clause-item">[Court Determined Income]</p>
                <p class="clause-item">The current annual income of [applicant/petitioner/respondent], [name of payor], for the purpose of determining child support is determined by the Court to be $ [amount];</p>
                <p class="clause-item">[Or]</p>
                <p class="clause-item">[Income Below Tables]</p>
                <p class="clause-item">At the time of signing of this consent order, the parties agree that the circumstances of the [applicant/petitioner/respondent], [name of payor], are: [he/she] is employed with [name of employer] and earns an annual gross income of approximately $ [amount]. This is less than the lowest income that requires support to be paid on the Nova Scotia Tables of the Child Support Guidelines.</p>
                <p class="clause-item">At the time of signing of this consent order, the parties agree that the circumstances of the [applicant/petitioner/respondent], [name of payor], are: [he/she] is in receipt of Income Assistance and has an annual gross income of approximately $ [amount]. This is less than the lowest income that requires support to be paid on the Nova Scotia Tables of the Child Support Guidelines.</p>
                <p class="clause-item">[Or]</p>
                <p class="clause-item">[Agreed Upon Income]</p>
                <p class="clause-item">The current annual income of the [applicant/petitioner/respondent], [name of payor], is agreed by both parties to be $ [amount] without determination by the Court;</p>
                <p class="clause-item">[Or]</p>
                <p class="clause-item">[Income/Average Income for Table Amount]</p>
                <p class="clause-item">The [applicant/petitioner/respondent], [name of payor], has an annual income of $ [amount] for the purpose of determining the table amount of child support, [calculated as an average of his/her employment income earned] from [employment name] for the years: [list years];</p>
                <p class="clause-item">The annual income of the [applicant/petitioner/respondent], [name], is determined by the Court to be $ [amount] based on the pattern of annual income for the last three (3) consecutive years ending in the year [year] and on the average annual income for the three (3) year period;</p>
                <p class="clause-item">[Or]</p>
                <p class="clause-item">[Self-Employed Income]</p>
                <p class="clause-item">The [applicant/petitioner/respondent], [name of payor] is self-employed as a(n) [occupation], earning variable amounts of income throughout the year, and from year to year, and upon the parties agreeing that, on average, the [applicant/petitioner/respondent], [name of payor], earns an annual income of $ [amount] for the purpose of determining the table amount of child support;</p>
                <p class="clause-item">[Or]</p>
                <p class="clause-item">[Reasonable Arrangements]</p>
                <p class="clause-item">The parties wish to enter into reasonable arrangements for the payment of child support by virtue of the [applicant/petitioner/respondent], [name of payor], paying the following expenses that the parties agree directly or indirectly benefit the child(ren): [list expenses];</p>
                <p class="clause-item">[Or]</p>
                <p class="clause-item">The parties agree that reasonable arrangements have been made for the child(ren) so that the amount of child support to be paid is lower than the table amount pursuant to the Federal/Provincial Child Support/Support Guidelines and in accordance with Section [17 (6.5) {if variation}/ 15.1(7) {if originating} of the Divorce Act / 10(5) of the Support and Custody Act].</p>
                <p class="clause-item">[add if child support includes special expenses]</p>
                <p class="clause-item">For the purpose of making an order for payment of special or extraordinary expenses, the [applicant/petitioner/respondent], [name of payor], is found to have an annual income of $ [amount].</p>
                <p class="clause-item">[Or]</p>
                <p class="clause-item">[replace the two income clauses with the following if applicable]</p>
                <p class="clause-item">For the purpose of making an order for payment of child support in an amount other than the table amount and special or extraordinary expenses, the [applicant/petitioner/respondent], [name of payor], is found to have an annual income of $ [amount] and the [applicant/petitioner/respondent], [name of recipient] is found to have an annual income of $ [amount];</p>
                <p class="clause-item">[Or]</p>
                <p class="clause-item">[Imputation of Income]</p>
                <p class="clause-item">The [applicant/petitioner/respondent], [name or payor], has failed to provide income information when required by the [order/notice] dated and [his/her] annual income is imputed to be $ [amount] for the purpose of determining the table amount of child support.</p>
                <p class="clause-item">The current annual income of the [applicant/petitioner/respondent], [name of payor], is imputed by the Court pursuant to clause [specify clause] of (s. 18(1) of the Child Support Guidelines Regulations. 19(1) of the Federal Child Support Guidelines) to be $ [amount];</p>
            </div>
        </div>

        <div class="subcategory">
            <div class="subcategory-toggle">Table Child Support</div>
            <div class="subcategory-content">
                <p class="clause-item">[Table Child Support]</p>
                <p class="clause-item">The [applicant/petitioner/respondent], [name of payor], shall pay child support to the [applicant/petitioner/respondent], [name of recipient], pursuant to the provincial Child Support Guidelines/federal Child Support Guidelines and in accordance with the Nova Scotia table, the amount of $ [amount] each month, payable on the first day of each month, and commencing [date].</p>
                <p class="clause-item">[Or]</p>
                <p class="clause-item">a)	The [applicant/petitioner/respondent], [name of payor], shall pay child support to the [applicant/petitioner/respondent], [name of recipient], in the amount of $ [amount] each month, based on the applicable table amount of the Child Support Guidelines.</p>
                <p class="clause-item">b)	Child support payments are due on the [number] day of each month starting on [date].</p>
                <p class="clause-item">[Or]</p>
                <p class="clause-item">b)	[Provide payment schedule, for example, weekly, bi-weekly, or twice each month on specified dates]</p>
                <p class="clause-item">[Table-Paid Every Two Weeks]</p>
                <p class="clause-item">The [applicant/petitioner/respondent], [name of payor] shall pay child support the the [applicant/petitioner/respondent], [name of recipient] pursuant to the provincial Child Support Guidelines/federal Child Support Guidelines and in accordance with the Nova Scotia table, the amount of $ [amount] each month and payable every two weeks at the rate of $ [amount] commencing [date] and continuing every two weeks thereafter.</p>
                <p class="clause-item">[Or]</p>
                <p class="clause-item">The [applicant/petitioner/respondent], [name of payor], shall pay child support to the [applicant/petitioner/respondent], [name of recipient], pursuant to the [provincial Child Support Guidelines/federal Child Support Guidelines] and in accordance with the Nova Scotia table, the amount of $ [amount], payable every two weeks at the rate of $ [amount] commencing [date], and continuing every two weeks thereafter.</p>
                <p class="clause-item">[Or]</p>
                <p class="clause-item">[Rounding Up / Excess of Table Amount]</p>
                <p class="clause-item">The [applicant/petitioner/respondent], [name of payor], shall pay child support/support to the [applicant/petitioner/respondent], [name of recipient] pursuant to the [provincial Child Support Guidelines/federal Child Support Guidelines] and in excess of the Nova Scotia table, the amount of $ [amount] each month payable on the first day of each month and commencing [date].</p>
            </div>
        </div>

        <div class="subcategory">
            <div class="subcategory-toggle">Shared Parenting Set Off</div>
            <div class="subcategory-content">
                <p class="clause-item">[Shared Parenting Set Off]</p>
                <p class="clause-item">Given the shared parenting schedule, child support will be determined at a set-off amount from the Child Support Guidelines and Tables using the current income of the parents.</p>
                <p class="clause-item">According to the [applicant/petitioner/respondent]’s, [name]’s, annual income of $ [amount], [he/she] shall pay child support in the amount of $ [amount] commencing [date].  According to the [applicant/petitioner/respondent]’s, [name of other party]’s, annual income of $ [amount], [he/she] shall pay child support in the amount of $ [amount]. The difference between these two amounts is $ [amount].</p>
                <p class="clause-item">Child support shall be paid by each party to the other (see monthly/biweekly clauses).</p>
            </div>
        </div>

        <div class="subcategory">
            <div class="subcategory-toggle">Shared Parenting Tax Clauses</div>
            <div class="subcategory-content">
                <p class="clause-item">[Shared Parenting Tax Clauses]</p>
                <p class="clause-item">Provided such is acceptable to the Canada Revenue Agency (CRA), each party may apply for one half of any and all child income benefits, which includes but is not limited to the Canada Child Benefit, the Nova Scotia Child Benefit and the Nova Scotia Affordable Living Tax Credit.</p>
                <p class="clause-item">Provided such is acceptable to the CRA, each party may claim on [his/her] tax return each year the amount for an eligible dependent in relation to one child;</p>
                <p class="clause-item">[Or]</p>
                <p class="clause-item">Provided such is acceptable to the CRA, the [applicant/petitioner/respondent], [name], may claim the amount for an eligible dependent on his tax return in odd numbered years, and the [applicant/petitioner/respondent], [name of other party], may claim the amount for an eligible dependent on her tax return in even numbered years.</p>
            </div>
        </div>

        <div class="subcategory">
            <div class="subcategory-toggle">Child Support Arrears</div>
            <div class="subcategory-content">
                <p class="clause-item">The [applicant/petitioner/respondent], [name of payor], shall pay retroactive child support to the [applicant/petitioner/respondent], [name of recipient], pursuant to following calculations.</p>

                <div class="clause-item clause-table">
                    <table>
                        <tbody>
                            <tr><td>A</td><td>B</td><td>C</td><td>Total</td></tr>
                            <tr><td>Period</td><td>Amount previously ordered</td><td>Amount Paid</td><td>Monthly Arrears (A-B)</td></tr>
                            <tr><td>[period]</td><td>[amount]</td><td>[amount]</td><td>[amount]</td></tr>
                        </tbody>
                    </table>
                </div>

                <p class="clause-item">The [applicant/petitioner/respondent], [name of payor], shall pay child support arrears to the [applicant/petitioner/respondent], [name of recipient], in the amount of $ [amount] each month payable on the first day of each month and commencing [date] for [number] months with the final payment being made on [date].</p>
            </div>
        </div>

        <div class="subcategory">
            <div class="subcategory-toggle">Retroactive Child Support</div>
            <div class="subcategory-content">
                <p class="clause-item">The [applicant/petitioner/respondent], [name of payor], shall pay retroactive child support to the [applicant/petitioner/respondent], [name of recipient], pursuant to following calculations.</p>

                <div class="clause-item clause-table">
                    <table>
                        <tbody>
                            <tr><td>A</td><td>B</td><td>C</td><td>Total</td></tr>
                            <tr><td>Period</td><td>Amount previously ordered</td><td>Amount Paid</td><td>Retroactive Amount (A-B)</td></tr>
                            <tr><td>[period]</td><td>[amount]</td><td>[amount]</td><td>[amount]</td></tr>
                        </tbody>
                    </table>
                </div>

                <p class="clause-item">The [applicant/petitioner/respondent], [name of payor], shall pay retroactive child support to the [applicant/petitioner/respondent], [name of recipient], in the amount of $ [amount] each month payable on the first day of each month and commencing [date] for [number] months with the final payment being made on [date].</p>
            </div>
        </div>

        <div class="subcategory">
            <div class="subcategory-toggle">Special Expenses Support</div>
            <div class="subcategory-content">
                <p class="clause-item">In addition to the table amount the [applicant/petitioner/respondent], [name of payor], shall pay child support to the [applicant/petitioner/respondent], [name of recipient], in the amount of $ [amount], each month, for [his/her] share of the following special or extraordinary expenses:</p>

                <div class="clause-item clause-table">
                    <table>
                        <tbody>
                            <tr><td>Child(ren)’s name(s)</td><td>Description of Expense</td><td>Total monthly net expense</td><td>Monthly amount to be paid</td><td>Percentage</td></tr>
                            <tr><td>[name]</td><td>[description]</td><td>[amount]</td><td>[amount]</td><td>[percentage]</td></tr>
                        </tbody>
                    </table>
                </div>

                <p class="clause-item">In total, the [applicant/petitioner/respondent], [name of payor], shall pay child support, to the [applicant/petitioner/respondent], [name of recipient], in the amount of $ [amount] each month, consisting of the table amount of $ [amount] each month plus special or extraordinary expenses of $ [amount] each month.</p>
            </div>
        </div>

        <div class="subcategory">
            <div class="subcategory-toggle">Undue Hardship</div>
            <div class="subcategory-content">
                <p class="clause-item">The [applicant/petitioner/respondent], [name of payor], resident of Nova Scotia, has an annual income of $ [amount] and [his/her] [roommate/common law spouse/spouse], [name], has an annual income of $ [amount] for the purposes of determining the table amount of child support [and his/her household standard of living].</p>
                <p class="clause-item">The [applicant/petitioner/respondent], [name of payor], would suffer undue hardship by reason of [circumstance] if required to pay child support in the amount of $ [amount] each month.</p>
                <p class="clause-item">The [applicant/petitioner/respondent], [name of payor], shall therefore pay child support to the [applicant/petitioner/respondent], [name of recipient], in the amount of $ [amount] each month, payable on the [date] day of each month and commencing [date].</p>
            </div>
        </div>

        <div class="subcategory">
            <div class="subcategory-toggle">Support for Children Over the Age of Majority</div>
            <div class="subcategory-content">
                <p class="clause-item">The [applicant/petitioner/respondent], [name of payor], has an annual income of $ [amount] and the [applicant/petitioner/respondent], [name of recipient], has an annual income of $ [amount] and the child, [name], has an annual income of $ [amount], for the purpose of determining support.</p>
                <p class="clause-item">The [applicant/petitioner/respondent], [name of payor], shall pay $ [amount] each month for the support of the child(ren), payable on the [date] day of each month and commencing [date].</p>
                <p class="clause-item">Support will continue provided confirmation is given that the child(ren) [is/are] enrolled in a post-secondary institution by [date].</p>
                <p class="clause-item">Support will terminate when the child (a) attains age 19 and is employed full-time and not attending school; or (b) ceases post-secondary studies; unless the child later resumes studies, in which case either party may apply for child support.</p>
            </div>
        </div>

        <div class="subcategory">
            <div class="subcategory-toggle">Disclosure</div>
            <div class="subcategory-content">
                <p class="clause-item">No later than May 1st of each year, the [applicant/petitioner/respondent], [name of payor], shall provide the [applicant/petitioner/respondent], [name of recipient], with a copy of his income tax return, completed and with all attachments, even if the return is not filed with the Canada Revenue Agency (CRA), and also provide each other with all notices of assessment from CRA immediately after they are received.</p>
            </div>
        </div>

        <div class="subcategory">
            <div class="subcategory-toggle">Administrative Recalculation of Child Support</div>
            <div class="subcategory-content">
                <p class="clause-item">The most recent order requiring the [applicant/petitioner/respondent], [name of payor], to pay child support is dated [date] and is referred to as “the child support order”.</p>
                <p class="clause-item">“Review date” means the anniversary each year of issuance of the recalculation authorization order.</p>
                <p class="clause-item">The provisions of the regulations made under section 55 of the Support and Custody Act apply to recalculation of child support.</p>

                <div class="subsubcategory">
                    <div class="subsubcategory-toggle">Review and Recalculation</div>
                    <div class="subsubcategory-content">
                        <p class="clause-item">On the review date, the Recalculation Clerk shall review and recalculate the table amount of child support by applying the process set out in the Administrative Recalculation Regulations.</p>
                        <p class="clause-item">If the payor does not provide sufficient financial information, income will be deemed to be 10% more than the most recent income used.</p>
                        <p class="clause-item">The recalculated amount becomes payable 31 days after notice is sent.</p>
                    </div>
                </div>

                <div class="subsubcategory">
                    <div class="subsubcategory-toggle">Restrictions on Recalculation</div>
                    <div class="subsubcategory-content">
                        <p class="clause-item">The Recalculation Clerk shall not recalculate support if circumstances under section 15 of the Administrative Recalculation of Child Support Regulations occur. If recalculation is not done, the Clerk shall send a statement explaining why.</p>
                    </div>
                </div>

                <div class="subsubcategory">
                    <div class="subsubcategory-toggle">Right to Object</div>
                    <div class="subsubcategory-content">
                        <p class="clause-item">A party who does not agree with the recalculated amount may object within 30 days by applying to vary, rescind, or suspend the recalculated order.</p>
                    </div>
                </div>

                <div class="subsubcategory">
                    <div class="subsubcategory-toggle">Notice to Recalculation Clerk</div>
                    <div class="subsubcategory-content">
                        <p class="clause-item">[Notice to Recalculation Clerk]</p>
                        <p class="clause-item">A copy of this order shall be filed with the Recalculation Clerk for the purpose of referral to the administrative recalculation program no later than five working days after the order is made.</p>
                        <p class="clause-item">Both parties shall notify the Recalculation Clerk at Recalculation Clerk at Nova Scotia Administrative Recalculation of Child Support Program, P.O. Box 23, Halifax, Nova Scotia, B3J 2L4, in writing of a change to any of the following contact information no later than ten days after the date of the change:</p>
                        <div class="clause-item clause-multiline">
                            <ul>
                                <li>i. mailing address,</li>
                                <li>ii. e-mail address,</li>
                                <li>iii. telephone number,</li>
                                <li>iv. fax number.</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    </div>
</div>


<div class="category">
    <div class="category-toggle">Spousal Support</div>
    <div class="category-content">

        <div class="subcategory">
            <div class="subcategory-toggle">Entitlement</div>
            <div class="subcategory-content">
                <p class="clause-item">It is agreed/found that the recipient is [not] entitled to spousal support on a [compensatory/non-compensatory/mixed compensatory and non-compensatory] basis.</p>
            </div>
        </div>

        <div class="subcategory">
            <div class="subcategory-toggle">No Entitlement</div>
            <div class="subcategory-content">
                <p class="clause-item">The Court finds that there is no entitlement for the [applicant/petitioner/respondent], [name of recipient], to receive to spousal support from the [applicant/petitioner/respondent], [name of payor].</p>
            </div>
        </div>

        <div class="subcategory">
            <div class="subcategory-toggle">Renouncement of Entitlement</div>
            <div class="subcategory-content">
                <p class="clause-item">Neither the [applicant/petitioner/respondent], [name of payor], or the [applicant/petitioner/respondent], [name or recipient], shall pay any amount by way of spousal support for the other and each hereby releases his or her past, present and future claim to such support pursuant to the Parenting and Support Act of Nova Scotia, R.S. c. 160 and any other similar legislation in Nova Scotia or any other jurisdiction or any successors thereto. This will apply regardless of changes in circumstances no matter how radical or unforeseen.</p>
            </div>
        </div>

        <div class="subcategory">
            <div class="subcategory-toggle">Periodic Payment</div>
            <div class="subcategory-content">
                <p class="clause-item">The [applicant/petitioner/respondent], [name of payor], shall pay the [applicant/petitioner/respondent], [name of recipient], spousal support in the amount of $ [amount] per month on the [day] of each month commencing [date] [and continuing until further order of the Court] [if appropriate, specify date or event].</p>
                <p class="clause-item">The [applicant/petitioner/respondent], [name of payor], shall pay the [applicant/petitioner/respondent], [name of recipient] spousal support in the amount of $ [amount] per month in installments of $ [amount] [each] on the [days] of each month commencing [date] [and continuing until further order of the Court] [if appropriate, specify date or event].</p>
            </div>
        </div>

        <div class="subcategory">
            <div class="subcategory-toggle">Conditional Payment</div>
            <div class="subcategory-content">
                <p class="clause-item">The [applicant/petitioner/respondent], [name of payor], shall pay the [applicant/petitioner/respondent], [name of recipient], spousal support in the amount of $ [amount] per month in installments of $ [amount] [each] on the [days] of each month commencing [date] only [indicate condition necessary].</p>
            </div>
        </div>

        <div class="subcategory">
            <div class="subcategory-toggle">Review of Spousal Support</div>
            <div class="subcategory-content">
                <p class="clause-item">Spousal support shall be reviewed by the Court on [date].</p>
                <p class="clause-item">The [applicant/petitioner/respondent], [name of payor], shall pay the [applicant/petitioner/respondent], [name of recipient], spousal support in the amount of $ [amount] per month in installments of $ [amount] [every] [day] commencing [day] [date] [and continuing until further order of the Court] [if appropriate, specify date or event].</p>
            </div>
        </div>

        <div class="subcategory">
            <div class="subcategory-toggle">Lump Sum</div>
            <div class="subcategory-content">
                <p class="clause-item">The [applicant/petitioner/respondent], [name of payor], shall pay the [applicant/petitioner/respondent], [name of recipient], lump sum spousal support in the amount of $ [amount] on or before [date] [details of payment schedule, if any].</p>
            </div>
        </div>

        <div class="subcategory">
            <div class="subcategory-toggle">Retroactive Spousal/Partner Support Owing</div>
            <div class="subcategory-content">
                <p class="clause-item">The [applicant/petitioner/respondent], [name of payor], shall pay to the [applicant/petitioner/respondent], [name of recipient], in the amount of $ [amount], for spousal support amounts accumulated during the period from [start date] to [end date], OR/ [the date of this Order], in addition to the ongoing spousal support obligation, payable, $ [monthly amount], to be paid on the [day] of each month commencing [date], until paid in full.</p>
                <p class="clause-item">The [applicant/petitioner/respondent], [name of payor], shall pay to the [applicant/petitioner/respondent], [name of recipient] in the amount of $ [amount] for spousal support amounts accumulated during the period from [start date] to [end date], OR/ [the date of this Order], in addition to the ongoing spousal support obligation, payable as a single payment of $ [amount] to be paid on or before [date].</p>
            </div>
        </div>

        <div class="subcategory">
            <div class="subcategory-toggle">Termination</div>
            <div class="subcategory-content">
                <p class="clause-item">Spousal support shall terminate upon the happening of any of the earlier/earliest of any of the following events: [list events]. The Director of the Maintenance Enforcement Program may rely upon an Affidavit from the [applicant/petitioner/respondent], [name], stating that any of these conditions has been met in dealing with enforcement questions.</p>
                <p class="clause-item">Spousal support shall terminate on [date].</p>
            </div>
        </div>

        <div class="subcategory">
            <div class="subcategory-toggle">Reimbursement of Tax</div>
            <div class="subcategory-content">
                <p class="clause-item">The [applicant/petitioner/respondent], [name of payor], shall reimburse the [applicant/petitioner/respondent], [name of recipient], for all refundable tax credits, child tax benefits, lost and all income tax, interest, penalties or other costs incurred by reason of claiming the spousal support during the retroactive period calculated by treating that spousal support as the top dollars earned by her for that year.</p>
                <p class="clause-item">The [applicant/petitioner/respondent], [name of payor], shall reimburse the [applicant/petitioner/respondent], [name of recipient], for all refundable tax credits, child tax benefits, lost and all income tax, interest, penalties or other costs incurred by reason of claiming the spousal support during the retroactive period calculated by treating that spousal support as the top dollars earned by her for that year. For greater clarity, the reimbursement will be calculated as follows. First, the [applicant/petitioner/respondent]’s, [name of recipient]’s, income tax shall be calculated including all relevant income, deductions and credits during the retroactive support and the spousal equivalent claim, if any. Second, the [applicant/petitioner/respondent]’s, [name]’s, income tax shall be calculated including all relevant income, deductions and credits including the retroactive support and spousal equivalent credit. The difference between the total tax payable from these two calculations plus interest and penalties shall represent the amount of the reimbursement.</p>
            </div>
        </div>

    </div>
</div>

<div class="category">
    <div class="category-toggle">Support Enforcement</div>
    <div class="category-content">
        <div class="subcategory">
            <div class="subcategory-toggle">Director of Support Enforcement</div>
            <div class="subcategory-content">
                <p class="clause-item">All child support payments shall be made payable to the [applicant/petitioner/respondent], [name of recipient].</p>
                <p class="clause-item">The payments shall be sent by the [applicant/petitioner/respondent], [name of payor], to the Office of the Director of Support Enforcement, P.O. Box 803, Halifax, Nova Scotia B3J 2V2, while the order is filed for enforcement with the Director.</p>
                <p class="clause-item">A Court officer shall send the current designated addresses of the parties, and a copy of this order, to the Office of the Director of Support Enforcement in accordance with section 9 of the Support Enforcement Act.</p>
                <p class="clause-item">Both parties shall advise the Office of the Director of Support Enforcement of any change to their address, within ten (10) days of the date of the change, under section 42(1) of the Support Enforcement Act.</p>
                <p class="clause-item">The [applicant/petitioner/respondent], [name of payor], shall advise the Office of the Director of Support Enforcement of a change in location, address and place of employment, including the commencement or cessation of employment, within ten (10) days of the date of the change, under section 42(2) of the Support Enforcement Act.</p>
            </div>
        </div>
    </div>
</div>
<div class="category">
    <div class="category-toggle">Property Division</div>
    <div class="category-content">

        <div class="subcategory">
            <div class="subcategory-toggle">Division of Matrimonial Property</div>
            <div class="subcategory-content">
                <p class="clause-item">The division of matrimonial property between the [applicant/petitioner/respondent], [name], and the [applicant/petitioner/respondent], [name of other party], shall be in accordance with the equalization chart, attached to this Order.</p>
                <p class="clause-item">[Or]</p>
                <p class="clause-item">The [applicant/petitioner/respondent], [name], shall maintain the following assets, with no further claim by the [applicant/petitioner/respondent], [name of other party]: [list assets]. The [applicant/petitioner/respondent], [name of respondent], shall maintain the following assets, with no further claim by the [applicant/petitioner/respondent], [name of other party]: [list assets].</p>
            </div>
        </div>

        <div class="subcategory">
            <div class="subcategory-toggle">Equalization Payment</div>
            <div class="subcategory-content">
                <p class="clause-item">The [applicant/petitioner/respondent], [name of payor], shall provide the [applicant/petitioner/respondent], [name], with the equalization payment in the amount of [amount] on or before [date]. The equalization payment shall be made by [manner of payment].</p>
            </div>
        </div>

        <div class="subcategory">
            <div class="subcategory-toggle">Matrimonial Home</div>
            <div class="subcategory-content">

                <div class="subsubcategory">
                    <div class="subsubcategory-toggle">Exclusive occupation of matrimonial home</div>
                    <div class="subsubcategory-content">
                        <p class="clause-item">The parties are the joint owners of a matrimonial home at [address]. The [applicant/petitioner/respondent], [name], shall have [interim] exclusive possession of the matrimonial home and real property associated therewith.</p>
                    </div>
                </div>

                <div class="subsubcategory">
                    <div class="subsubcategory-toggle">Transfer of title to matrimonial home</div>
                    <div class="subsubcategory-content">
                        <p class="clause-item">The [applicant/petitioner/respondent], [name of payor], shall forthwith transfer to the [applicant/petitioner/respondent], [name of recipient], by way of Quit Claim Deed all his/her right, title, and interest in the matrimonial home and real property associated therewith and shall release his/her interest therein pursuant to the Matrimonial Property Act of Nova Scotia.</p>
                    </div>
                </div>

                <div class="subsubcategory">
                    <div class="subsubcategory-toggle">Release of mortgage</div>
                    <div class="subsubcategory-content">
                        <p class="clause-item">The [applicant/petitioner/respondent], [name], shall have the [applicant/petitioner/respondent], [name], released from the covenants of the mortgage with [bank] and [other encumbrances] against the matrimonial home and shall provide the [applicant/petitioner/respondent], [name] with sufficient proof thereof prior to registering the Quit Claim Deed.</p>
                    </div>
                </div>

                <div class="subsubcategory">
                    <div class="subsubcategory-toggle">Sale of matrimonial home</div>
                    <div class="subsubcategory-content">
                        <p class="clause-item">The matrimonial home shall be listed for sale no later than [date].</p>
                    </div>
                </div>

                <div class="subsubcategory">
                    <div class="subsubcategory-toggle">Joint conduct of sale</div>
                    <div class="subsubcategory-content">
                        <p class="clause-item">The [applicant/petitioner/respondent], [name], shall be jointly responsible for all decisions relating to the conduct of the sale of the matrimonial home, including but not limited to selection of realtor, terms of listing agreement, listing price, acceptance or rejection of offers and/or counter-offers, terms of closing.</p>
                    </div>
                </div>

                <div class="subsubcategory">
                    <div class="subsubcategory-toggle">Sole conduct of sale</div>
                    <div class="subsubcategory-content">
                        <p class="clause-item">[Should the parties be unable to agree,] the [applicant/petitioner/respondent], [name], shall have the sole responsibility for decisions relating to the conduct of the sale of the matrimonial home, including but not limited to selection of realtor, terms of listing agreement, listing price, acceptance or rejection of offers and/or counter-offers, terms of closing. The [applicant/petitioner/respondent], [name of other party], shall execute any document(s) reasonably required to give effect to this clause.</p>
                    </div>
                </div>

                <div class="subsubcategory">
                    <div class="subsubcategory-toggle">Expenses pending sale</div>
                    <div class="subsubcategory-content">
                        <p class="clause-item">Pending sale, the [applicant/petitioner/respondent], [name], shall equally share the following expenses related to the matrimonial home [mortgage, property tax, utilities].</p>
                        <p class="clause-item">[Or]</p>
                        <p class="clause-item">The [applicant/petitioner/respondent], [name], shall be responsible for the payment of [mortgage, property tax, utilities] relating to the matrimonial home. The [applicant/petitioner/respondent], [name], shall indemnify and save harmless the [applicant/petitioner/respondent], [name], with respect to such payments.</p>
                    </div>
                </div>

                <div class="subsubcategory">
                    <div class="subsubcategory-toggle">Disposition of proceeds of sale of matrimonial home</div>
                    <div class="subsubcategory-content">
                        <p class="clause-item">Immediately upon sale of the matrimonial home, the following debts shall be paid from the net proceeds of sale: [list debts]. The remaining net proceeds from the sale of the matrimonial home shall be divided equally between the [applicant/petitioner/respondent], [name] and the [applicant/petitioner/respondent], [name of other party].</p>
                    </div>
                </div>

            </div>
        </div>

        <div class="subcategory">
            <div class="subcategory-toggle">Vehicles</div>
            <div class="subcategory-content">
                <p class="clause-item">The [applicant/petitioner/respondent], [name], shall forthwith transfer to the [applicant/petitioner/respondent], [name of other party], registration to the [motor vehicle]. The [applicant/petitioner/respondent], [name], shall be the sole owner of said vehicle without further claim by the [applicant/petitioner/respondent], [name]. The [applicant/petitioner/respondent], [name], shall execute any document(s) reasonably required to give effect to this clause.</p>
                <p class="clause-item">[Or]</p>
                <p class="clause-item">The [applicant/petitioner/respondent], [name], shall maintain the [motor vehicle] without further claim by the [applicant/petitioner/respondent], [name].</p>
            </div>
        </div>

        <div class="subcategory">
            <div class="subcategory-toggle">RRSPs</div>
            <div class="subcategory-content">
                <p class="clause-item">The [applicant/petitioner/respondent], [name], shall maintain the following registered investments in [his/her] own name without further claim by the [applicant/petitioner/respondent], [name]: [registered investments].</p>
                <p class="clause-item">[Or]</p>
                <p class="clause-item">The [applicant/petitioner/respondent], [name], shall equally divide the following registered investments [list registered investments] by way of tax-deferred spousal rollover. The parties shall execute all documents required to give effect to this clause, including but not limited to a Form T2220.</p>
            </div>
        </div>

        <div class="subcategory">
            <div class="subcategory-toggle">Close joint accounts</div>
            <div class="subcategory-content">
                <p class="clause-item">The [applicant/petitioner/respondent], [name], shall close all joint bank accounts. Any balance in such accounts shall be [retained by the applicant/petitioner/respondent] OR/[equally divided between the parties].</p>
            </div>
        </div>

        <div class="subcategory">
            <div class="subcategory-toggle">Household contents</div>
            <div class="subcategory-content">
                <p class="clause-item">Each party shall retain the household contents currently in [his/her] possession with no further claim by the other party.</p>
                <p class="clause-item">[Or]</p>
                <p class="clause-item">The [applicant/petitioner/respondent], [name], shall be entitled to attend at the matrimonial home to obtain the following household contents [list items or attach list].</p>
            </div>
        </div>

        <div class="subcategory">
            <div class="subcategory-toggle">Division of debts</div>
            <div class="subcategory-content">
                <p class="clause-item">The [applicant/petitioner/respondent], [name], shall have sole responsibility for the following joint debt(s), without any expectation of contribution by the [applicant/petitioner/respondent], [name of other party], and shall immediately take all necessary steps to have the [applicant/petitioner/respondent], [name], name removed from the debt. In the event that the [applicant/petitioner/respondent], [name], is called upon to make any contribution to such debt(s), the [applicant/petitioner/respondent], [name], shall indemnify the [applicant/petitioner/respondent], [name], with respect thereto: [joint debts].</p>
                <p class="clause-item">[Or]</p>
                <p class="clause-item">The [applicant/petitioner/respondent], [name], shall have sole responsibility for the following debts in [his/her] own name with no expectation of contribution by the [applicant/petitioner/respondent], [name]: [list debts].</p>
            </div>
        </div>

        <div class="subcategory">
            <div class="subcategory-toggle">Pension Division</div>
            <div class="subcategory-content">

                <div class="subsubcategory">
                    <div class="subsubcategory-toggle">Division of pension at source</div>
                    <div class="subsubcategory-content">
                        <p class="clause-item">The employment pension of the [applicant/petitioner/respondent], [name], with [employer or agency] shall be divided at source pursuant to the [Pension Benefits Division Act, S.C. 1992, c. 46 /Pension Benefits Act, S.N.S. 2011, c. 41/relevant pension legislation by transferring 50 per cent of the pension benefit earned from the date of cohabitation, [date], to the date of separation, [date]. The parties shall consent to a separate order to give effect to this division, if required by the pension administrator.</p>
                        <p class="clause-item">In the event the pension administrator levies any fee or fees to affect the division of the pension, the parties shall equally share such cost and each shall pay one-half the amount of the fee directly to the pension administrator within ten (10) business days of receiving notice of the fee.</p>
                        <p class="clause-item">Either party may apply to the Supreme Court of Nova Scotia (Family Division) for an Order for further directions with respect to the interpretation or administration of these provisions or their implementation by the pension plan administrator.</p>
                    </div>
                </div>

                <div class="subsubcategory">
                    <div class="subsubcategory-toggle">No division of pension</div>
                    <div class="subsubcategory-content">
                        <p class="clause-item">The [applicant/petitioner/respondent], [name], shall retain his or her employment pension with [employer/agency] with no further claim by the [applicant/petitioner/respondent], [name].</p>
                    </div>
                </div>

                <div class="subsubcategory">
                    <div class="subsubcategory-toggle">Canada Pension Plan</div>
                    <div class="subsubcategory-content">
                        <p class="clause-item">Notwithstanding anything contained in this Order, either party is entitled to apply for a division of credits pursuant to the Canada Pension Plan, R.S.C. 1985, c. C-8.</p>
                    </div>
                </div>

            </div>
        </div>

    </div>
</div>

       <div class="category">
    <div class="category-toggle">Concluding Clauses</div>
    <div class="category-content">

        <div class="subcategory">
            <div class="subcategory-toggle">Variation</div>
            <div class="subcategory-content">
                <p class="clause-item">This Order shall continue until varied by a new Order of a Court of competent jurisdiction.</p>
            </div>
        </div>

        <div class="subcategory">
            <div class="subcategory-toggle">Enforcement</div>
            <div class="subcategory-content">
                <p class="clause-item">A requirement to pay money under this order, which is not enforced under the Maintenance Enforcement Act, may be enforced by execution order, or periodic execution order.</p>
                <p class="clause-item">The sheriff shall do such things as are necessary to enforce this order and, to do so, may exercise any power of a sheriff permitted in a recovery or execution order.</p>
                <p class="clause-item">All constables and peace officers are to do all such acts as may be necessary to enforce the terms of this order and they have full power and authority to enter upon any lands and premises to enforce this order.</p>
            </div>
        </div>

        <div class="subcategory">
            <div class="subcategory-toggle">Consent and Signatures</div>
            <div class="subcategory-content">
                <p class="clause-item">DATED at Halifax, Nova Scotia, on ___, 20___. </p>

                <p class="clause-item">____________________________________</p>
                <p class="clause-item">COURT OFFICER</p>

                <p class="clause-item">CONSENTED TO:</p>

                <p class="clause-item">____________________________________&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;____________________</p>
                <p class="clause-item">APPLICANT&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DATE</p>

                <p class="clause-item">____________________________________&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;____________________</p>
                <p class="clause-item">RESPONDENT&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DATE</p>
            </div>
        </div>

    </div>
</div>

</main><script>
function insertTextIntoDocument(n) {
    Word.run(function(t) {
        var selection = t.document.getSelection();
        selection.insertText(n + "\n\n", Word.InsertLocation.replace);
        return t.sync();
    }).catch(function(n) {
        console.log("Error: " + n);
        n instanceof OfficeExtension.Error && console.log("Debug info: " + JSON.stringify(n.debugInfo));
    });
}

function insertHtmlIntoDocument(n) {
    Word.run(function(t) {
        var selection = t.document.getSelection();
        selection.insertHtml(n + "<p></p>", Word.InsertLocation.replace);
        return t.sync();
    }).catch(function(n) {
        console.log("Error: " + n);
        n instanceof OfficeExtension.Error && console.log("Debug info: " + JSON.stringify(n.debugInfo));
    });
}


Office.onReady(function(n) {
    if (n.host === Office.HostType.Word) {
        document.querySelectorAll(".category-toggle, .subcategory-toggle, .subsubcategory-toggle").forEach(n => {
            n.addEventListener("click", () => {
                n.classList.toggle("expanded");
            });
        });
        document.querySelectorAll(".clause-item").forEach(n => {
            n.addEventListener("click", () => {
                n.classList.contains("clause-multiline") || n.classList.contains("clause-table") ?
                    insertHtmlIntoDocument(n.innerHTML) :
                    insertTextIntoDocument(n.textContent.trim());
            });
        });
    }
})
</script></body></html>
