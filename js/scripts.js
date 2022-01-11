function hello() {
    let szam1 = document.getElementById("szam1Ertek").value;
    let szam2 = document.getElementById("szam2Ertek").value;
    let muv = document.getElementById("muvelet").value;

    let x = parseInt(szam1);
    let y = parseInt(szam2);
    let eredmeny = 0;

    if (muv === "osszead") {
        eredmeny = x + y;
    } else if (muv === "kivon") {
        eredmeny = x - y;
    } else if (muv === "oszt") {
        eredmeny = x / y;
    } else if (muv === "szoroz") {
        eredmeny = x * y;
    }


    console.log(eredmeny);

}

