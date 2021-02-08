#Frontend Developer Assessment


You are to create a pay with Renmoney button, once clicked this opens a widget centered in the middle of the screen of size 384px width by 620px height, but should become full screen on screen sizes below 600px width.
This widget should have the Renmoney logo and an introductory message of your choice.
There should be a continue button which starts the onboarding process.
The onboarding process involves:


##Eligibility Check:

-	State and lga
-	Employment status: Employed or Self-Employed
-	Monthly Income
-	BVN
-	DOB (Date picker)
-	First, last and middle name
-	Email
-	Phone number
-	Gender


##Personal Details

-	Residential Status – Owner or renting
-	Residential Address
-	Date moved in (Date picker)
-	Marital Status – Single, Married
-	Level of Education – Primary, Secondary, Graduate


##Employment Details

-	Employer name
-	Employer Sector – Finance, Banking, Charity
-	Employment start date (Date picker)
-	Office address
-	Work email


All these inputs should `not be` on a single page of the widget, try to make different pages for these sections.
Figure out the best approach for this.
Once all inputs are filled, log out all the fields and send a `GET request` to this endpoint `https://jsonplaceholder.typicode.com/todos/1` and log out the response.
