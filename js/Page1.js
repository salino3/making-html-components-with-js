

function GenerateAppNav(){
  let MyAppNav = document.createElement("SectionMyAppNav");

  // Creando un 'nav' Nav
  let Nav = document.createElement("nav");
  Nav.setAttribute("class", "myNav");

  // Creando un 'div' divNavMain
  let divNavMain = document.createElement("div");
  divNavMain.setAttribute("class", "divNavMain");

  // Creando un 'a' aDivNav
  let aDivNav = document.createElement("a");
  aDivNav.innerHTML = "<a>Index Page</a>";
  aDivNav.setAttribute("class", "myA");
  aDivNav.setAttribute("href", "../html/Page1.html");

  // Creando un 'a' aDivNav2
  let aDivNav2 = document.createElement("a");
  aDivNav2.innerHTML = "<a>Page 2</a>";
  aDivNav2.setAttribute("class", "myA");
  aDivNav2.setAttribute("href", "../html/Page2.html");

  // Creando un 'a' aDivNav3
  let aDivNav3 = document.createElement("a");
  aDivNav3.innerHTML = "<a>Page 3</a>";
  aDivNav3.setAttribute("class", "myA");
  aDivNav3.setAttribute("href", "../html/Page3.html");

  // Creando un 'a' aDivNav4
  let aDivNav4 = document.createElement("a");
  aDivNav4.innerHTML = "<a>Google.com</a>";
  aDivNav4.setAttribute("class", "myA");
  aDivNav4.setAttribute("href", "https://www.google.com/");
  aDivNav4.setAttribute("target", "_blank");

  

  // añadiendo los componentes a SectionMyApp
  divNavMain.appendChild(aDivNav);
  divNavMain.appendChild(aDivNav2);
  divNavMain.appendChild(aDivNav3);
  divNavMain.appendChild(aDivNav4);
  Nav.appendChild(divNavMain);
  MyAppNav.appendChild(Nav);
  document.getElementById("SectionMyAppNav").appendChild(MyAppNav);
}

GenerateAppNav();
//! One Section for every function

//* GenerateBodyDiv()
function GenerateBodyDiv(){
  let MySectionBody = document.createElement("SectionMyAppBody");

  // Making div index
  let MyDivBody = document.createElement("div");
  MyDivBody.innerHTML = "<div></div>";
  MyDivBody.setAttribute("class", "MyDivBody");

  MySectionBody.appendChild(MyDivBody);
  document.getElementById("SectionMyAppBody").appendChild(MySectionBody);



};

GenerateBodyDiv();




