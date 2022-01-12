function hello() {
    let szam1 = document.getElementById("szam1Ertek").value;
    let szam2 = document.getElementById("szam2Ertek").value;
    let muv = document.getElementById("muvelet").value;
    let kiiras = document.getElementById("kiiras");

    let x = parseInt(szam1);
    let y = parseInt(szam2);
    let eredmeny = 0;

    if (muv === "+") {
        eredmeny = x + y;
    } else if (muv === "-") {
        eredmeny = x - y;
    } else if (muv === "/") {
        eredmeny = x / y;
    } else if (muv === "*") {
        eredmeny = x * y;
    }

    kiiras.innerText = `${x} ${muv} ${y} = ${eredmeny}`;

    document.getElementById("szam1Ertek").value = "";
    document.getElementById("szam2Ertek").value = "";
    document.getElementById("muvelet").value = "+";
    
    document.getElementById("szam1Ertek").focus();
}

document.getElementById("szam1Ertek").focus();

