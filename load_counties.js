const counties = ['All', 'Bedfordshire', 'Berkshire', 'Bristol', 'Buckinghamshire',
  'Cambridgeshire', 'Cheshire', 'Cornwall', 'County Durham',
  'Cumbria', 'Derbyshire', 'Devon', 'Dorset',
  'East Riding of Yorkshire', 'East Sussex', 'Essex',
  'Gloucestershire', 'Gloucestershire and Bristol',
  'Greater London City of London', 'Greater Manchester', 'Hampshire',
  'Herefordshire', 'Hertfordshire', 'Isle of Wight', 'Kent',
  'Lancashire', 'Leicester', 'Leicestershire', 'Lincolnshire',
  'Merseyside', 'Norfolk', 'North Yorkshire',
  'Northamptonshire', 'Northumberland', 'Nottinghamshire',
  'Oxfordshire', 'Shropshire', 'Somerset', 'South Yorkshire',
  'Staffordshire', 'Suffolk', 'Surrey', 'Tyne and Wear',
  'Warwickshire', 'West Midlands', 'West Sussex', 'West Yorkshire',
  'Wiltshire', 'Worcestershire'];

  locationDiv = document.getElementById("locationCheckboxes");
  counties.forEach(county => {
   const div = document.createElement("div");
   div.setAttribute("id", `${county}-div`)
   div.setAttribute("class", "location-checkbox");

   const label = document.createElement("label");
   label.setAttribute("for", county);
   label.innerHTML = county;
   
   const input = document.createElement("input");
   input.setAttribute("type", "checkbox");
   input.setAttribute("id", county);
   input.setAttribute("value", county);
   input.setAttribute("name", "location");
   input.setAttribute("class", "locationOption")
   if (county !== "All") {
    input.className += " notAll";
   }

   div.appendChild(label);
   div.appendChild(input);
   locationDiv.appendChild(div);
  });

  allInput = document.getElementById("All");
  allInput.addEventListener("change", function() {
   isChecked = this.checked;
   options = document.querySelectorAll(".locationOption");
   options.forEach(option => {option.checked = isChecked});
  })
  locationInput = document.querySelectorAll(".notAll");
  locationInput.forEach(location => {
    location.addEventListener("change", function() {
      if (allInput.checked && !this.checked) {
        allInput.checked = false;
      }
    })
  })
