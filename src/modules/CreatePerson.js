import { postToApi } from '../utils/apiOperations';

const newPersonForm = document.getElementById('newPersonForm');
newPersonForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const formData = new FormData(this);
  const newPerson = Object.fromEntries(formData);
  const url = 'https://sarson.codes/CA2/api/person';
  //const url = 'http://localhost:8080/CA2/api/person';
  postToApi(url, formatPersonObject(newPerson));
});

const formatPersonObject = person => {
  const formattedPerson = {
    firstName: person.firstName,
    lastName: person.lastName,
    email: person.email,
    address: {
      street: person.street,
      additionalInfo: person.addressAdditional,
      cityInfo: {
        zipCode: person.zip,
        city: person.city
      }
    },
    hobbies: [
      {
        name: person.hobbyName,
        description: person.hobbyDescription
      }
    ],
    phones: [
      {
        number: person.phone,
        description: person.phoneDescription
      }
    ]
  };
  return formattedPerson;
};
