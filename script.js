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
  