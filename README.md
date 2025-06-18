# Accessing through Github Pages

This application is also deployed to Github Pages for quick accessing without needing to build on your local machine.

Access it at this link:
https://frdizon.github.io/people-web/

## Running on your local machine.

Clone this repository:
```
git clone https://github.com/frdizon/people-web.git
```

Go inside your cloned repository:
```
cd .\people-web\
```

Install required modules/dependencies:
```
npm install
```

You can now build the app on your localhost:
```
npm run dev
```

## Sample unit tests
Unit test files are under `__tests__` folders. <br/>
There are only 3 components that have sample Unit testing:

#### src/components/AddPeopleDialog
![image](https://github.com/user-attachments/assets/5537bccc-b035-4fa9-b96a-a3fbdf9321bd)<br/>
![image](https://github.com/user-attachments/assets/8168df45-0822-4b85-a0f9-a149b2416c16)

#### src/components/CommonButton
![image](https://github.com/user-attachments/assets/7ba84d78-df8e-4c62-93c1-ddf51796d5ad)<br/>
![image](https://github.com/user-attachments/assets/09f99cd8-adbf-4f0b-8b4d-360ff477dcf5)

#### src/redux/peopleSlice.ts
![image](https://github.com/user-attachments/assets/2f0585ec-6cbd-4734-8755-77cc36373a26)<br/>
![image](https://github.com/user-attachments/assets/b8d24235-b06f-440c-b539-10626a3ddb4c)
* Only tested 2 reducer actions, as a Sample unit testing for reducer

