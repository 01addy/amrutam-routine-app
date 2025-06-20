🌿 Amrutam Routine App

A comprehensive React Native application built for the **Amrutam React Native Internship Assignment**. The app is designed to create and manage personalized wellness routines for patients with caregiver support and weekly health insights.

---

## .apk file download link- https://expo.dev/accounts/01_addy/projects/amrutam-routine-app/builds/bd906a5a-aa6a-44a0-919d-655c0341a6eb

## 📱 What the App Does

The **Amrutam Routine App** allows Ayurvedic practitioners or caregivers to:

- View a list of patients who need routines
- Create personalized routines for each patient
- Add multiple health activities/products
- Configure reminders for time and days of the week
- Review weekly goals/benefits
- Assign routines to caregivers
- View final summary before submission

It focuses on **user-friendly UI/UX**, clean navigation, and extensible component-based structure — optimized for scalability.

---

## 🔄 Workflow of the App

Here’s how a user flows through the app:

### 🏠 Dashboard Screen
- Displays list of patients (mock data for now)
- Option to start routine creation for any patient

### 📝 Routine Creation Steps

1. **Basic Details**
   - Select routine type
   - Add patient details

2. **Add Reminder Items**
   - Select category (product/activity)
   - Enter name, quantity, unit
   - Choose time slot & applicable days

3. **Reminder Channels**
   - Choose how the patient will be reminded (notification, call, etc.)

4. **Weekly Benefits**
   - Enter goals/outcomes expected from the routine

5. **Assign Caregiver**
   - Assign caregiver & link them to a specific patient

6. **Final Summary**
   - Overview of all inputs for review before saving

---

## 🧱 Project Structure

amrutam-routine-app/
├── assets/                         # App icons, splash, and images
│   ├── icon.png
│   ├── adaptive-icon.png
│   └── splash-icon.png
│
├── components/                     # Reusable UI components
│   ├── Header.js
│   ├── InputField.js
│   ├── PrimaryButton.js
│   ├── RoutineCard.js
│   ├── RoutineSummaryBlock.js
│   └── ...
│
├── constants/                      # Predefined static values
│   ├── categories.js
│   ├── colors.ts
│   ├── daysOfWeek.js
│   └── units.js
│
├── screens/                        # All app screens (UI + logic)
│   ├── Dashboard.js
│   ├── BasicDetails.js
│   ├── ReminderItems.js
│   ├── ReminderChannels.js
│   ├── WeeklyBenefits.js
│   ├── AssignCaregiver.js
│   ├── FinalSummary.js
│   └── AboutDeveloper.js
│
├── utils/                          # Helper functions and local storage
│   ├── validators.js
│   ├── storage.js
│   └── data.js
│
├── App.js                          # Main navigation and stack config
├── app.json                        # Expo configuration
├── eas.json                        # EAS Build configuration
├── babel.config.js                 # Babel compiler settings
└── README.md                       # Project documentation

---

## 👨‍💻 About the Developer

Developed with ❤️ by **Aditya Pratap Singh**

- 📧 Email: [adityapratap.job@gmail.com](mailto:adityapratap.job@gmail.com)
- 📱 Phone: +91-8858066219
- 🌐 GitHub: [01addy](https://github.com/01addy)
- 🔗 LinkedIn: [Aditya Pratap Singh](https://www.linkedin.com/in/adityapratap2712)

---

## 🔗 Important Links

- 📦 **Download APK**: [[Expo Build Link](https://expo.dev/accounts/01_addy/projects/amrutam-routine-app/builds/bd906a5a-aa6a-44a0-919d-655c0341a6eb)](https://expo.dev/accounts/01_addy/projects/amrutam-routine-app/builds/bd906a5a-aa6a-44a0-919d-655c0341a6eb)
- 🎥 **Screen Recording**: 


---

## 🚀 Tech Stack

- **React Native (Expo SDK 53)**
- React Navigation (Drawer + Stack)
- AsyncStorage for local state
- Custom reusable components
- Expo EAS for build & deployment

---

## 📌 Notes

- Currently uses mock data for patients
- All screens are fully functional
- Code is modular and clean
- Designed to scale with backend/database integration later

---

> This project was built as part of the **Amrutam Internship Assignment (React Native Developer)** and showcases strong UI/UX sense, clean code practices, and scalable architecture.

