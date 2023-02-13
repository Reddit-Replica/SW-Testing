class TrafficStatusObjects{

    ScrollDown(){
        cy.get('[class=content]')
            .eq(1)
            .scrollTo(0,200)
    }
    DayButton(){
        cy.get('[id=day-button]')
            .first()
            .click()
    }

    DayOfWeekButton(){
        cy.get('[id=day-of-week-button]')
            .first()
            .click()
    }

    ViewAllModerators(){
        cy.get('[id=mods-view-all]')
            .click()
    }

    MonthButton(){
        cy.get('[id=month-button]')
            .first()
            .click()
    }
    
    SeeAll(){
        cy.get('[id=view-all-top-communities-2]')
            .click()
    }

    GoToCommunity(commmName2){
        cy.get(commmName2)
            .click()
    }

    TrafficStatusButton(){
        cy.get('[id=traffic-stats-button]')
            .click()
    }

    //tr ==> row
    GetDateInTheDayTable(date){
        cy.get('[id=table-day]')
            .contains('td', date);
    }

    GetMembersJoinedInTheDayTable(numberofMembers){
        cy.get('[id=table-day]')
            .contains('td', numberofMembers); 
    }

    GetDayOfTheWeekInTheDayTable(day){
        cy.get('[id=week-date]')
            .contains('td', day);
    }

    GetMembersJoinedInTheDayOfWeekTable(numberofMembers2){
        cy.get('[id=week-date]')
            .contains('td', numberofMembers2); 
    }
    
    GetMonthInTheDayTable(month2){
        cy.get('[id=month-table]')
            .contains('td', month2); 
    }

    GetMembersJoinedInTheMonthTable(numberofMembers){
        cy.get('[id=month-table]')
            .contains('td', numberofMembers); 
    }

    TotalLast24Hour(numberOfMembers3){
        cy.get('[id=day]')
            .should('have.text',numberOfMembers3)
    }

    TotalLast7Days(numberOfMembers3){
        cy.get('[id=week]')
            .should('have.text',numberOfMembers3)
    }

    TotalLastMonth(numberOfMembers4){
        cy.get('[id=week]')
            .should('have.text',numberOfMembers4)
    }
    

    

}

export default TrafficStatusObjects