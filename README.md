# miskatonic-library-app

Created for the FBLA competition Mobile Application Developement, won first in state. 

It's an iOS and Android compatible app made through the React Native framework.

# Competition Overview

Two (2) parts: a prejudged project and a presentation. Competitors must complete both parts for award eligibility.
Topic: Develop an app to manage the issuance of books and to provide other information at a school library. Give the school a name. The app must be able to do or show the following:

 - Allow students and teachers to reserve books.
 - Allow students and teachers to check out books.
 - Remind students and teachers when books are overdue.
 - Show a map of the school library.


## Competition Guidelines
 - The following platforms may be used to develop the project: Google’s Android, Apple iOS, or Microsoft Windows Phone.
 - Project submissions must include the source code and screen shots of the GUI in PDF format.
 - The solution must run standalone with no programming errors.
 - Applications may deploy from a smartphone, tablet, or both, but must be smartphone deployable.
 - Applications do not need to be available for download from a digital-distribution multimedia-content service.
 - The app should be shown to the judges.

# The App itself

## AsyncStorage Guidelines

Checked out books are in their corresponding key title:
```
{
  "checkedOut:<title>": <user> | null
}
```
When books are due (format `Date()`):
```
{
  "due:<title>": <number>
}
```
Reserved books are in their corresponding key title:
```
{
  "reserved:<title>": <user> | null
}
```
Whether the user is logged in or not:
```
{
  "loggedIn": <username | false>
}
```

Registered users:
```
{
  "user:<username>": <password>
}
```
