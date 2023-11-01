
const getAllUser = () => {
  //TODO: Read file and return users here
  const fs = require('fs');

try {
    const jsonData = require('./users.json'); 
    console.log(jsonData);
    
} catch (error) {
    console.error(error);
}
};

const getFirstUser = (list) => {
  //TODO: get first user of list
  const fs = require('fs');

try {
  const data = JSON.parse(fs.readFileSync('users.json','utf-8')); 
  const firstObject = data[0]; 
  console.log(firstObject);
} catch (error) {
  console.error(error);
}
};

const getLast = (list) => {
  //TODO: get last user of list
  const fs = require('fs');

try {
  const data = JSON.parse(fs.readFileSync('users.json', 'utf8')); 
  const lastObjectIndex = data.length - 1;
  const lastObject = data[lastObjectIndex]; 
  console.log(lastObject);
} catch (error) {
  console.error(error);
}
};

const getUserByID = (list, userID) => {
  //TODO: get user object by id
  const fs = require('fs');

try {
  const data = JSON.parse(fs.readFileSync('users.json', 'utf-8')); 
 
  if (data[userID]) {
    const userId = data[userID]; 
    console.log(userId);
  } else {
    console.log('Object not found at the specified index.');
  }
} catch (error) {
  console.error(error);
}
};

const getUserByCompanyName = (list,companyName) => {
  //TODO: get user object by company name
  const fs = require('fs');

  try {
    const data = JSON.parse(fs.readFileSync('users.json', 'utf8')); 
      const result = data.filter( obj => obj.company.name === companyName); 
      console.log(result);
    } 
   catch (error) {
    console.error(error);
  }
};

const getUsersByCity = (list, city) => {
  //TODO: get users that live in this city
  const fs = require('fs');
  
try {
  const data = JSON.parse(fs.readFileSync('users.json', 'utf8')); 
 
  const usersInCity = data.filter(obj => obj.address.city === city);
  console.log(usersInCity);
} catch (error) {
  console.error(error);
}
};

const getStreet = ( list,userID) => {
  //TODO: get street name by userID
  const fs = require('fs');

  try{
   const data = JSON.parse(fs.readFileSync('users.json', 'utf8')); 
   
    const users = data.filter(obj => obj.id == userID);
    console.log("street : ",users[0].address.street );
  
  } catch (error) {
    console.error(error);
  }};


const addNewUser = (list, userObject) => {
  //TODO: add new user to the list


};

const updateUser = (list, userID) => {
  //TODO: update email when id === userID
};

const deleteUserById = (list, userID) => {
  //TODO: remove user when id === userID
  
};

module.exports = {
  getAllUser,
  getFirstUser,
  getLast,
  getUserByID,
  getUserByCompanyName,
  getUsersByCity,
  getStreet,
  addNewUser,
  updateUser,
  deleteUserById,
};
