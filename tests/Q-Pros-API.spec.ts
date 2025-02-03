import {test,expect} from "playwright/test"


test('POST request to create a user', async ({ request }) => {
  const endPoint = 'https://petstore3.swagger.io/api/v3/user';


  const requestBody = {
    id: 10,
    username: 'theUser',
    firstName: 'John',
    lastName: 'James',
    email: 'john@email.com',
    password: '12345',
    phone: '12345',
    userStatus: 1
  };

 
  const response = await request.post(endPoint, {
    data: requestBody,
    headers: {
      'Content-Type': 'application/json',
    },
  });


  expect(response.status()).toBe(200);


  const responseBody = await response.json();

  console.log('Response Body:', responseBody);
  expect(responseBody.id).toBe(requestBody.id);
  expect(responseBody.username).toBe(requestBody.username);
  expect(responseBody.firstName).toBe(requestBody.firstName);
  expect(responseBody.lastName).toBe(requestBody.lastName);
  expect(responseBody.email).toBe(requestBody.email);
  expect(responseBody.phone).toBe(requestBody.phone);
  expect(responseBody.userStatus).toBe(requestBody.userStatus);



});

test('GET request to get info of the user by username', async ({ request }) => {
    const endPoint = 'https://petstore3.swagger.io/api/v3/user/theUser';
 
    const response = await request.get(endPoint);
  
    expect(response.status()).toBe(200);
  
    const responseBody = await response.json();
  
      console.log('Response Body:', responseBody);
   


  });


  test('PUT request to update user by username and userinfo', async ({ request }) => {
    const endPoint = 'https://petstore3.swagger.io/api/v3/user/Mohamed';
  
    // Updated request body with new user data
    const updatedUser = {
      id: 10,
      username: 'Mohamed',
      firstName: 'Mohamed',
      lastName: 'Ali',
      email: 'mohamed.ali@email.com',
      password: 'newPassword123',
      phone: '9876543210',
      userStatus: 1
    };
  
  
    const response = await request.put(endPoint, {
      data: updatedUser,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
   
    expect(response.status()).toBe(200);
  
  
    const responseBody = await response.json();
   
     console.log('Response Body:', responseBody);
  
   
    expect(responseBody.username).toBe(updatedUser.username);
    expect(responseBody.firstName).toBe(updatedUser.firstName);
    expect(responseBody.lastName).toBe(updatedUser.lastName);
    expect(responseBody.email).toBe(updatedUser.email);
    expect(responseBody.phone).toBe(updatedUser.phone);
    expect(responseBody.userStatus).toBe(updatedUser.userStatus);
  
   
  });




  test('DELETE request to remove user by username', async ({ request }) => {
    const endPoint = 'https://petstore3.swagger.io/api/v3/user/theUser';
  
   
    const response = await request.delete(endPoint);
  
   
    expect(response.status()).toBe(200);
    
   
    const responseBody = await response.json();
  
   
    console.log('Response Body:', responseBody);
  
    
     expect(responseBody.message).toBe('successful operation');
  });