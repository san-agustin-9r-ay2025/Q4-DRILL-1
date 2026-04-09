function result() {
    let kiloWatt = document.getElementById("wattUsaged").value; 
        if (Number(kiloWatt) >= 0 && Number(kiloWatt) <= 100) {
            window.alert ("Lifeline Consumer!");
        }
        else if (Number(kiloWatt) >=101 && Number(kiloWatt) <=200) {
            window.alert ("Low consumption!");
        }
        else if (Number(kiloWatt) >=201 && Number(kiloWatt) <=300) {
            window.alert ("Average consumption!");
        }
        else if (Number(kiloWatt) >=301 && Number(kiloWatt) <=500) {
            window.alert ("High consumption!");
        }
        else {
            window.alert ("Very High consumption!");
        }

}