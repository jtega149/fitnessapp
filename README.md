# 🏋️‍♂️ Fitness Tracker App

A full-stack fitness tracking web application built with Django on the backend and JavaScript/HTML/CSS on the frontend. This project helps users monitor workouts, track calories, and manage fitness goals.

---

## 🚀 Getting Started

Follow these instructions to set up and run the project locally.

---

### 📁 Clone the Repository

```bash
git clone https://github.com/jtega149/fitnessapp.git
cd fitnessapp
cd backend
```
### 🛠 Backend Setup (Django)

```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```
If requirements.txt doesn't exist:
```bash
pip freeze > requirements.txt
```

### 🌐 Frontend Setup (JavaScript)

```bash
cd ../frontend
npm install
npm start
```


---