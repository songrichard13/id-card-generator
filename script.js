const texts = ["ID Card Generator", "Made by Song Richard"];
const typingHeading = document.getElementById("typingHeading");

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeWriter() {
  const currentText = texts[textIndex];

  if (isDeleting) {
    typingHeading.textContent = currentText.substring(0, charIndex);
    charIndex--;

    if (charIndex < 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length;
    }
  } else {
    typingHeading.textContent = currentText.substring(0, charIndex);
    charIndex++;

    if (charIndex > currentText.length) {
      isDeleting = true;
      charIndex = currentText.length; 
      setTimeout(typeWriter, 2000); 
      return;
    }
  }

  setTimeout(typeWriter, isDeleting ? 50 : 100);
}


typeWriter();



function generateRandomID() {
    return 'ID-' + Math.floor(Math.random() * 1e9).toString().padStart(9, '0');
  }
  
  function generateCard() {
    const surName = document.getElementById('surName').value;
    const givenName = document.getElementById('givenName').value;
    const dob = document.getElementById('dob').value;
    const birthPlace = document.getElementById('birthPlace').value;
    const sex = document.getElementById('sex').value;
    const height = document.getElementById('height').value;
    const profession = document.getElementById('profession').value;
    const photoInput = document.getElementById('photoInput');
    const countrySelect = document.getElementById('country');
    const countryCode = countrySelect.value.toLowerCase();
    const countryName = countrySelect.options[countrySelect.selectedIndex].text;
    const region = countrySelect.options[countrySelect.selectedIndex].dataset.region;
    const theme = document.getElementById('theme').value;

    function updateVerticalTextColor(countryCode) {
      console.log("Country Code:", countryCode);  
    
      
      const flagColors = {
        "cm": "#0066B3", // Cameroon (Blue)
        "ga": "#0066B3", // Gabon (Blue)
        "ci": "#F47C00", // Cote d'Ivoire (Orange)
        "sn": "#009639", // Senegal (Green)
        "fr": "#0055A4", // France (Blue)
        "de": "#000000", // Germany (Black)
      };
    
      
      const selectedColor = flagColors[countryCode.toLowerCase()]; 
    
      if (selectedColor) {
        console.log("Applying color:", selectedColor);  
        const verticalText = document.getElementById('verticalText');
        verticalText.querySelector('.blue').style.color = selectedColor; // Change "NATIONAL" color
        verticalText.querySelector('.red').style.color = selectedColor;  // Change "ID CARD" color
      } else {
        console.error("Color not found for country:", countryCode);
      }
    }
    
    function generateCard() {
      const countrySelect = document.getElementById('country');
      const countryCode = countrySelect.value.toLowerCase();  
    
      console.log("Country Code in generateCard:", countryCode);  
    
     
      updateVerticalTextColor(countryCode);
    
     
    }
    
    
    document.getElementById('generateBtn').addEventListener('click', generateCard);
    
    
    function generateCard() {
      const surName = document.getElementById('surName').value;
      const givenName = document.getElementById('givenName').value;
      const dob = document.getElementById('dob').value;
      const birthPlace = document.getElementById('birthPlace').value;
      const sex = document.getElementById('sex').value;
      const height = document.getElementById('height').value;
      const profession = document.getElementById('profession').value;
      const photoInput = document.getElementById('photoInput');
      const countrySelect = document.getElementById('country');
      const countryCode = countrySelect.value.toLowerCase();
      const countryName = countrySelect.options[countrySelect.selectedIndex].text;
      const region = countrySelect.options[countrySelect.selectedIndex].dataset.region;
      const theme = document.getElementById('theme').value;
    
      document.getElementById('generatedId').textContent = generateRandomID();
      document.getElementById('outSurname').textContent = surName;
      document.getElementById('outGivenNames').textContent = givenName;
      document.getElementById('outDob').textContent = dob;
      document.getElementById('outBirthPlace').textContent = birthPlace;
      document.getElementById('outSex').textContent = sex;
      document.getElementById('outHeight').textContent = height + ' m';
      document.getElementById('outProfession').textContent = profession;
      document.getElementById('countryName').textContent = `${region} - ${countryName}`;
    
      const flagDisplay = document.getElementById('flagDisplay');
      flagDisplay.innerHTML = `<span class="fi fi-${countryCode}"></span>`;
    
      const card = document.getElementById('idCard');
      card.classList.remove('light', 'dark');
      card.classList.add(theme);
    
      const photoPreview = document.getElementById('photoPreview');
      if (photoInput.files && photoInput.files[0]) {
        const reader = new FileReader();
        reader.onload = (e) => {
          photoPreview.src = e.target.result;
        };
        reader.readAsDataURL(photoInput.files[0]);
      }
    
      
      updateVerticalTextColor(countryCode);
    }
    
  
    const randomId = generateRandomID();
document.getElementById('generatedId').textContent = randomId;

// Generate the barcode
const barcodeDiv = document.getElementById('barcode');
barcodeDiv.innerHTML = '<svg id="barcodeSvg"></svg>'; 
JsBarcode("#barcodeSvg", randomId, {
  format: "CODE128",
  width: 2,
  height: 40,
  displayValue: false
});

    document.getElementById('outSurname').textContent = surName;
    document.getElementById('outGivenNames').textContent = givenName;
    document.getElementById('outDob').textContent = dob;
    document.getElementById('outBirthPlace').textContent = birthPlace;
    document.getElementById('outSex').textContent = sex;
    document.getElementById('outHeight').textContent = height + ' m';
    document.getElementById('outProfession').textContent = profession;
    document.getElementById('countryName').textContent = `${region} - ${countryName}`;
  
    const flagDisplay = document.getElementById('flagDisplay');
    flagDisplay.innerHTML = `<span class="fi fi-${countryCode}"></span>`;
  
    const card = document.getElementById('idCard');
    card.classList.remove('light', 'dark');
    card.classList.add(theme);
  
    const photoPreview = document.getElementById('photoPreview');
    if (photoInput.files && photoInput.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        photoPreview.src = e.target.result;
      };
      reader.readAsDataURL(photoInput.files[0]);
    }
  }
  
  document.getElementById('generateBtn').addEventListener('click', generateCard);
  
  document.getElementById('downloadBtn').addEventListener('click', () => {
    html2canvas(document.getElementById('idCard')).then((canvas) => {
      const link = document.createElement('a');
      link.download = 'id_card.png';
      link.href = canvas.toDataURL();
      link.click();
    });
  });
  