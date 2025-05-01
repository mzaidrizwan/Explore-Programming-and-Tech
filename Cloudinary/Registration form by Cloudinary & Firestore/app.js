import { initializeApp } from "";
import {
    getFirestore,
    collection,
    addDoc, getDocs
} from "";

const firebaseConfig = {
    
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const CLOUD_NAME = "";
const UPLOAD_PRESET = "";

document.getElementById("submit").addEventListener("click", async function (e) {
    e.preventDefault();

    // inside your submit-handler (after DOMContentLoaded or with <script defer>)
    const country = document.getElementById("country").value;
    const city = document.getElementById("city").value;
    const course = document.getElementById("course").value;
    const proficiency = document.getElementById("proficiency").value;
    const fullName = document.getElementById("fullname").value;
    const fatherName = document.getElementById("fathername").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const cnic = document.getElementById("cnic").value;
    const fatherCnic = document.getElementById("fathercnic").value;
    const dob = document.getElementById("dob").value;
    const gender = document.getElementById("gender").value;
    const address = document.getElementById("address").value;
    const qualification = document.getElementById("qualification").value;
    const laptop = document.getElementById("laptop").value;
    const file = document.getElementById("picture").files[0];

    if (
        country &&
        city &&
        course &&
        proficiency &&
        fullName &&
        fatherName &&
        email &&
        phone &&
        cnic &&
        fatherCnic &&
        dob &&
        gender &&
        address &&
        qualification &&
        laptop &&
        file
    ) {
        //   let file = document.getElementById("fileInput").files[0];
        let previewImg = document.getElementById("preview");

        if (!file) {
            alert("Select a file first");
            return;
        }


        // cloudinary code============
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", UPLOAD_PRESET);

        try {
            const response = await fetch(
                `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
                {
                    method: "POST",
                    body: formData,
                }
            );

            if (!response.ok)
                throw new Error(`Upload failed: ${response.statusText}`);

            const data = await response.json();
            console.log("Upload success! data", data);

            //========upload to database============
            try {
                const docRef = await addDoc(collection(db, "students"), {
                    country: country,
                    city: city,
                    course: course,
                    proficiency: proficiency,
                    fullName: fullName,
                    fatherName: fatherName,
                    email: email,
                    phone: phone,
                    cnic: cnic,
                    fatherCnic: fatherCnic,
                    dob: dob,
                    gender: gender,
                    address: address,
                    qualification: qualification,
                    laptop: laptop,
                    file: data.secure_url
                });


                Swal.fire({
                    title: "Good job!",
                    text: "Form Submitted Successfuly!",
                    icon: "success"
                });



                // console.log("Document written with ID: ", docRef.id);
            } catch (e) {


                Swal.fire({
                    title: "Error Occured while Submitting",
                    text: "Check Your Given Info or Check your internet Connection",
                    icon: "question"
                });
            }


            resetAllFields();
            // previewImg.src = data.secure_url;
            // previewImg.style.display = 'block';

        } catch (err) {
            console.log(err);
            alert("Upload error");
        }
    } else {
        Swal.fire({
            icon: "error",
            text: "Make sure to fill all fields",
        });
    }
});
function resetAllFields() {
    // reset all selects
    ['country', 'city', 'course', 'proficiency', 'gender', 'laptop'].forEach(id => {
        const el = document.getElementById(id);
        if (el && el.tagName === 'SELECT') el.selectedIndex = 0;
    });

    // reset all text, email, date inputs
    ['fullname', 'fathername', 'email', 'phone', 'cnic', 'fathercnic', 'dob', 'address', 'qualification', 'searchCnic'].forEach(id => {
        const el = document.getElementById(id);
        if (el && (el.tagName === 'INPUT')) el.value = '';
    });

    // reset file input & preview
    const pic = document.getElementById('picture');
    if (pic) {
        pic.value = '';
        const preview = document.getElementById('preview');
        if (preview) {
            preview.src = '';
            preview.style.display = 'none';
        }
    }
}




document.addEventListener('DOMContentLoaded', function () {
    // Function to apply CNIC validation to an input field
    function applyCnicValidation(inputElement) {
        if (!inputElement) return;

        // Set maxlength attribute to 15 characters
        inputElement.setAttribute('maxlength', '15');

        // Add placeholder for visual guidance
        if (!inputElement.hasAttribute('placeholder')) {
            inputElement.setAttribute('placeholder', 'XXXXX-XXXXXXX-X');
        }

        // Add input event listener to validate as user types
        inputElement.addEventListener('input', function (e) {
            // Get the current input value
            let inputValue = e.target.value;

            // Remove any characters that are not numbers or hyphens
            const sanitizedValue = inputValue.replace(/[^0-9-]/g, '');

            // Format the CNIC as the user types
            let formattedValue = sanitizedValue.replace(/-/g, ''); // Remove existing hyphens

            if (formattedValue.length > 0) {
                // Add first hyphen after 5 digits
                if (formattedValue.length > 5) {
                    formattedValue = formattedValue.substring(0, 5) + '-' + formattedValue.substring(5);
                }

                // Add second hyphen after 12 digits (5 + 1 + 7 = 13)
                if (formattedValue.length > 12) {
                    formattedValue = formattedValue.substring(0, 13) + '-' + formattedValue.substring(13);
                }

                // Ensure the total length doesn't exceed 15 characters (13 digits + 2 hyphens)
                if (formattedValue.length > 15) {
                    formattedValue = formattedValue.substring(0, 15);
                }
            }

            // Update the input value with formatted value
            e.target.value = formattedValue;
        });

        // Format and validate the CNIC when focus leaves the field
        inputElement.addEventListener('blur', function (e) {
            const value = e.target.value.replace(/-/g, ''); // Remove existing hyphens

            if (value.length > 0) {
                let formattedValue = '';

                // Add first hyphen after 5 digits
                if (value.length > 5) {
                    formattedValue = value.substring(0, 5) + '-' + value.substring(5);
                } else {
                    formattedValue = value;
                }

                // Add second hyphen after 12 digits (5 + 1 + 7 = 13)
                if (value.length > 12) {
                    formattedValue = formattedValue.substring(0, 13) + '-' + formattedValue.substring(13);
                }

                e.target.value = formattedValue;

                // Add validation visual feedback (optional)
                const cnicPattern = /^\d{5}-\d{7}-\d{1}$/;
                if (formattedValue.length > 0 && !cnicPattern.test(formattedValue)) {
                    inputElement.classList.add('is-invalid');
                } else {
                    inputElement.classList.remove('is-invalid');
                }
            }
        });

        // Prevent default behavior of non-numeric and non-hyphen keys
        inputElement.addEventListener('keypress', function (e) {
            const keyCode = e.which || e.keyCode;
            const keyChar = String.fromCharCode(keyCode);

            // Allow only numbers and hyphen
            if (!/[0-9-]/.test(keyChar)) {
                e.preventDefault();
            }
        });
    }

    // Apply validation to both CNIC fields
    const cnicInput = document.getElementById('cnic');
    const fatherCnicInput = document.getElementById('fathercnic');

    applyCnicValidation(cnicInput);
    applyCnicValidation(fatherCnicInput);
});


document.addEventListener('DOMContentLoaded', function () {
    // First, change the input type from "number" to "text"
    // This is necessary because "number" inputs don't allow "+" or "-" characters
    const phoneInput = document.getElementById('phone');
    if (phoneInput) {
        // Set maxlength attribute to 14 characters
        phoneInput.setAttribute('maxlength', '14');

        // Add placeholder for visual guidance if not already present
        if (!phoneInput.hasAttribute('placeholder')) {
            phoneInput.setAttribute('placeholder', '+92XXX-XXXXXXX');
        }

        // Add input event listener to validate as user types
        phoneInput.addEventListener('input', function (e) {
            // Get current input value
            let inputValue = e.target.value;

            // Remove any characters that aren't numbers, +, or -
            const sanitizedValue = inputValue.replace(/[^0-9+\-]/g, '');

            // Enforce maximum length of 14 characters
            let truncatedValue = sanitizedValue;
            if (sanitizedValue.length > 14) {
                truncatedValue = sanitizedValue.substring(0, 14);
            }

            // Ensure the "+" is only at the beginning if it exists
            if (truncatedValue.includes('+') && truncatedValue.indexOf('+') !== 0) {
                const valueWithoutPlus = truncatedValue.replace(/\+/g, '');
                truncatedValue = '+' + valueWithoutPlus;
            }

            // Update the input value with the sanitized and truncated value
            e.target.value = truncatedValue;

            // Format as user types (optional)
            if (truncatedValue.startsWith('+') && truncatedValue.length > 6) {
                // Format: +92XXX-XXXXXXX
                let formatted = truncatedValue.replace(/-/g, ''); // Remove existing hyphens

                // Insert hyphen after +92XXX
                if (formatted.length > 6) {
                    formatted = formatted.substring(0, 6) + '-' + formatted.substring(6);

                    // If adding the hyphen makes it longer than 14, trim it
                    if (formatted.length > 14) {
                        formatted = formatted.substring(0, 14);
                    }

                    e.target.value = formatted;
                }
            }
        });

        // Format the phone number when the field loses focus
        phoneInput.addEventListener('blur', function (e) {
            let value = e.target.value;

            // If empty, do nothing
            if (!value) return;

            // Check if the value starts with '+' - if not, add it
            if (!value.startsWith('+')) {
                value = '+' + value;
            }

            // Remove all existing hyphens for consistent formatting
            value = value.replace(/-/g, '');

            // Ensure we don't exceed 14 characters
            if (value.length > 14) {
                value = value.substring(0, 14);
            }

            // Pakistani mobile format: +92XXX-XXXXXXX
            // Remove any non-digit characters except the leading +
            let digits = value.substring(0, 1) + value.substring(1).replace(/\D/g, '');

            // Format according to the placeholder pattern
            if (digits.length >= 3) {
                // Add country code section
                let formatted = digits.substring(0, 3); // +92

                if (digits.length > 3) {
                    // Add the next 3 digits for the network code
                    const networkSection = digits.substring(3, Math.min(6, digits.length));
                    formatted += networkSection;

                    // Add hyphen after network code if we have more digits
                    if (digits.length > 6) {
                        formatted += '-' + digits.substring(6);
                    }
                }

                // Ensure final formatted value doesn't exceed 14 characters
                if (formatted.length > 14) {
                    formatted = formatted.substring(0, 14);
                }

                e.target.value = formatted;
            }
        });

        // Prevent disallowed characters on keypress
        phoneInput.addEventListener('keypress', function (e) {
            const keyCode = e.which || e.keyCode;
            const keyChar = String.fromCharCode(keyCode);

            // Allow only numbers, plus sign, and hyphen
            if (!/[0-9+\-]/.test(keyChar)) {
                e.preventDefault();
            }

            // If trying to add a second + sign, prevent it
            if (keyChar === '+' && this.value.includes('+')) {
                e.preventDefault();
            }

            // Prevent input if we've reached maximum length
            if (this.value.length >= 14 && keyCode !== 8 && keyCode !== 46) { // 8=backspace, 46=delete
                e.preventDefault();
            }
        });
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const cnicInput = document.getElementById('searchCnic');

    // Add event listener for input validation
    cnicInput.addEventListener('input', function (e) {
        // Remove any character that is not a number or hyphen
        let input = e.target.value.replace(/[^0-9-]/g, '');

        // Format the CNIC as per the placeholder (XXXXX-XXXXXXX-X)
        if (input.length > 0) {
            // Remove all existing hyphens first to avoid duplicates
            input = input.replace(/-/g, '');

            // Add hyphens at appropriate positions
            if (input.length > 5) {
                input = input.substring(0, 5) + '-' + input.substring(5);
            }
            if (input.length > 13) {
                input = input.substring(0, 13) + '-' + input.substring(13);
            }

            // Limit the length to match the format (15 characters including hyphens)
            if (input.length > 15) {
                input = input.substring(0, 15);
            }
        }

        // Update the input value
        e.target.value = input;
    });

    // Add focus & blur event for visual feedback
    cnicInput.addEventListener('focus', function () {
        this.classList.add('border-primary');
    });

    cnicInput.addEventListener('blur', function () {
        this.classList.remove('border-primary');

        // Validate the format on blur
        const cnicPattern = /^\d{5}-\d{7}-\d{1}$/;
        if (this.value && !cnicPattern.test(this.value)) {
            this.classList.add('is-invalid');
        } else {
            this.classList.remove('is-invalid');
        }
    });
});










document.getElementById('searchBtn').addEventListener('click', async function () {
    let searchCnic = document.getElementById('searchCnic').value.trim();
    let resultDiv = document.getElementById('searchResult');
    let searchResult = "";

    const querySnapshot = await getDocs(collection(db, "students"));
    let found = false;

    for (const doc of querySnapshot.docs) {
        const data = doc.data();

        if (data.cnic === searchCnic) {
            found = true;
            searchResult = `  <div class="card shadow-sm border-0 mb-4">
    <div class="card-header bg-primary text-white py-3 d-flex align-items-center">
      <h4 class="m-0 fs-5">Applicant Information</h4>
    </div>
    <div class="card-body">
      <div class="row">
        <!-- Profile Picture Column -->
        <div class="col-12 col-sm-4 col-md-3 text-center mb-3 mb-md-0">
          <div class="mb-2">
            <img src="${data.file}" alt="${data.fullName}'s Picture" class="img-thumbnail rounded-circle shadow-sm" style="width: 100%; max-width: 150px; height: auto; object-fit: cover;">
          </div>
          <h5 class="text-primary mb-0 text-truncate">${data.fullName}</h5>
          <p class="text-muted small text-wrap">${data.course} - ${data.proficiency}</p>
        </div>
        
        <!-- Details Column -->
        <div class="col-12 col-sm-8 col-md-9">
          <div class="row g-3">
            <!-- Personal Information -->
            <div class="col-12 col-lg-6">
              <div class="card h-100 border-0 bg-light">
                <div class="card-header bg-light border-0">
                  <h5 class="card-title mb-0 fs-6"><i class="bi bi-person-fill me-2"></i>Personal Details</h5>
                </div>
                <div class="card-body pt-2">
                  <ul class="list-group list-group-flush bg-transparent">
                    <li class="list-group-item bg-transparent px-0 py-2 d-flex flex-wrap">
                      <span class="text-muted me-2 flex-shrink-0">Father's Name:</span>
                      <span class="fw-medium text-wrap">${data.fatherName}</span>
                    </li>
                    <li class="list-group-item bg-transparent px-0 py-2 d-flex flex-wrap">
                      <span class="text-muted me-2 flex-shrink-0">Gender:</span>
                      <span class="fw-medium">${data.gender}</span>
                    </li>
                    <li class="list-group-item bg-transparent px-0 py-2 d-flex flex-wrap">
                      <span class="text-muted me-2 flex-shrink-0">Date of Birth:</span>
                      <span class="fw-medium">${data.dob}</span>
                    </li>
                    <li class="list-group-item bg-transparent px-0 py-2 d-flex flex-wrap">
                      <span class="text-muted me-2 flex-shrink-0">Qualification:</span>
                      <span class="fw-medium text-wrap">${data.qualification}</span>
                    </li>
                    <li class="list-group-item bg-transparent px-0 py-2 d-flex flex-wrap">
                      <span class="text-muted me-2 flex-shrink-0">Has Laptop:</span>
                      <span class="fw-medium">${data.laptop === 'yes' ? '<span class="badge bg-success">Yes</span>' : '<span class="badge bg-danger">No</span>'}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <!-- Contact Information -->
            <div class="col-12 col-lg-6">
              <div class="card h-100 border-0 bg-light">
                <div class="card-header bg-light border-0">
                  <h5 class="card-title mb-0 fs-6"><i class="bi bi-envelope-fill me-2"></i>Contact Information</h5>
                </div>
                <div class="card-body pt-2">
                  <ul class="list-group list-group-flush bg-transparent">
                    <li class="list-group-item bg-transparent px-0 py-2 d-flex flex-wrap">
                      <span class="text-muted me-2 flex-shrink-0">Email:</span>
                      <span class="fw-medium text-wrap">${data.email}</span>
                    </li>
                    <li class="list-group-item bg-transparent px-0 py-2 d-flex flex-wrap">
                      <span class="text-muted me-2 flex-shrink-0">Phone:</span>
                      <span class="fw-medium">${data.phone}</span>
                    </li>
                    <li class="list-group-item bg-transparent px-0 py-2 d-flex flex-wrap">
                      <span class="text-muted me-2 flex-shrink-0">CNIC:</span>
                      <span class="fw-medium">${data.cnic}</span>
                    </li>
                    <li class="list-group-item bg-transparent px-0 py-2 d-flex flex-wrap">
                      <span class="text-muted me-2 flex-shrink-0">Father's CNIC:</span>
                      <span class="fw-medium">${data.fatherCnic}</span>
                    </li>
                    <li class="list-group-item bg-transparent px-0 py-2 d-flex flex-wrap">
                      <span class="text-muted me-2 flex-shrink-0">Location:</span>
                      <span class="fw-medium text-wrap">${data.city}, ${data.country}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <!-- Address Information (Full Width) -->
            <div class="col-12">
              <div class="card border-0 bg-light">
                <div class="card-header bg-light border-0">
                  <h5 class="card-title mb-0 fs-6"><i class="bi bi-geo-alt-fill me-2"></i>Address</h5>
                </div>
                <div class="card-body pt-2">
                  <p class="mb-0 text-wrap">${data.address}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <style>
    .text-wrap { white-space: normal !important; }
    .flex-shrink-0 { flex-shrink: 0; }
  </style>

`;
            break;
        }
    }

    if (!found) {
        searchResult = `No Student Found with CNIC ${searchCnic}`;
    }

    resultDiv.innerHTML = searchResult;
});













