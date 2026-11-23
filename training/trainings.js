/* Same data as trainings.json, used when the dashboard is opened from a local file (browsers block reading .json files there). Keep both identical. */
window.AD_TRAININGS = {
 "version": 1,
 "picture": {
  "w": 1600,
  "h": 900
 },
 "note": "Training modules for the Academic Dashboard. To add a module: add an object to \"modules\" (mode: admin or teacher), put its screenshots in training/shots, then copy this file into trainings.js after \"window.AD_TRAININGS = \".",
 "modules": [
  {
   "id": "academic-planning",
   "mode": "admin",
   "menu": "Training: Academic Planning",
   "title": "Academic Planning",
   "subtitle": "Timetables, workload, cover and meetings",
   "color": "#2f7fd8",
   "intro": "Welcome. In this short training you will learn how to use Academic Planning: uploading the timetable, workload, cover and meetings.",
   "outro": "That is all for Academic Planning. You can replay any step from the progress bar.",
   "steps": [
    {
     "title": "Open Academic Planning",
     "say": "In the sidebar, click Academic Planning. It holds the saved timetables of your department.",
     "img": "shots/academic-planning-01.webp",
     "hot": [
      {
       "x": -0.38,
       "y": 36.66,
       "w": 14.75,
       "h": 5.11
      }
     ]
    },
    {
     "title": "Upload the timetable PDF",
     "say": "When a new timetable is published, open the account menu and choose Upload Recent Timetable PDF. The PDF is read in the browser, then saved to the department sheet.",
     "img": "shots/academic-planning-02.webp",
     "hot": [
      {
       "x": 84.06,
       "y": 28.5,
       "w": 14.88,
       "h": 8.39
      }
     ]
    },
    {
     "title": "Department and Workload",
     "say": "Pick the department here. Workload lists every teacher with lessons, periods taught, free periods, classes and rooms.",
     "img": "shots/academic-planning-03.webp",
     "hot": [
      {
       "x": 15.12,
       "y": 4.44,
       "w": 11.5,
       "h": 5.11
      },
      {
       "x": 25.87,
       "y": 4.44,
       "w": 8.55,
       "h": 5.11
      }
     ]
    },
    {
     "title": "Teacher timetable",
     "say": "Timetable shows one teacher's week. Use the teacher list or the arrows to move between teachers.",
     "img": "shots/academic-planning-04.webp",
     "hot": [
      {
       "x": 33.61,
       "y": 4.44,
       "w": 8.74,
       "h": 5.11
      },
      {
       "x": 68.32,
       "y": 4.44,
       "w": 14.78,
       "h": 5.11
      }
     ]
    },
    {
     "title": "Live classes",
     "say": "Live classes shows who is teaching right now and where. You can also check any date and time.",
     "img": "shots/academic-planning-05.webp",
     "hot": [
      {
       "x": 41.54,
       "y": 4.44,
       "w": 9.8,
       "h": 5.11
      },
      {
       "x": 68.31,
       "y": 4.44,
       "w": 18.77,
       "h": 5.11
      }
     ]
    },
    {
     "title": "Cover: mark absent teachers",
     "say": "Open Cover. Tap the teachers who are absent, then check the date and the periods.",
     "img": "shots/academic-planning-06.webp",
     "hot": [
      {
       "x": 50.52,
       "y": 4.44,
       "w": 6.88,
       "h": 5.11
      },
      {
       "x": 44.0,
       "y": 22.24,
       "w": 26.12,
       "h": 3.76
      },
      {
       "x": 29.63,
       "y": 8.56,
       "w": 11.75,
       "h": 5.11
      }
     ]
    },
    {
     "title": "Generate cover",
     "say": "Click Generate cover. Free teachers with the fewest lessons that day are chosen first.",
     "img": "shots/academic-planning-06.webp",
     "hot": [
      {
       "x": 55.62,
       "y": 8.56,
       "w": 11.11,
       "h": 5.11
      }
     ]
    },
    {
     "title": "Confirm the cover",
     "say": "Red cells are the covers. Click any free cell to swap a teacher, then Confirm cover to save it. Past covers keeps the history.",
     "img": "shots/academic-planning-08.webp",
     "hot": [
      {
       "x": 81.48,
       "y": 8.56,
       "w": 10.61,
       "h": 5.11
      },
      {
       "x": 65.84,
       "y": 8.56,
       "w": 11.07,
       "h": 5.11
      }
     ]
    },
    {
     "title": "Schedule a meeting",
     "say": "In Schedule Meeting, choose the department, grades, duration and working days, then click Find best slot.",
     "img": "shots/academic-planning-09.webp",
     "hot": [
      {
       "x": 56.61,
       "y": 4.44,
       "w": 12.48,
       "h": 5.11
      },
      {
       "x": 29.19,
       "y": 9.17,
       "w": 55.75,
       "h": 46.59
      },
      {
       "x": 30.63,
       "y": 47.21,
       "w": 10.78,
       "h": 6.44
      }
     ]
    },
    {
     "title": "Meeting results",
     "say": "The free slots common to all selected teachers are shown. Save the meeting and invite the teachers from here.",
     "img": "shots/academic-planning-10.webp",
     "hot": [
      {
       "x": 19.19,
       "y": 9.11,
       "w": 75.75,
       "h": 87.67
      }
     ]
    }
   ]
  },
  {
   "id": "performance-tracking",
   "mode": "admin",
   "menu": "Training: Performance Tracking",
   "title": "Performance Tracking",
   "subtitle": "Teacher evaluation, scans and the MyAis weekly plans check",
   "color": "#c62828",
   "intro": "Welcome. This training covers Performance Tracking: the teachers table, scans, evaluations, and checking weekly plans in MyAis, including installing the helper extension.",
   "outro": "That is all for Performance Tracking. You can replay any step from the progress bar.",
   "steps": [
    {
     "title": "Open Performance Tracking",
     "say": "Click Performance Tracking. The header filters teachers by department, Boys or Girls, and shows the current week.",
     "img": "shots/performance-tracking-01.webp",
     "hot": [
      {
       "x": -0.38,
       "y": 41.22,
       "w": 15.62,
       "h": 5.11
      },
      {
       "x": 15.12,
       "y": 4.44,
       "w": 83.5,
       "h": 5.56
      }
     ]
    },
    {
     "title": "The teachers table",
     "say": "Each row shows the subject, school, this week's tick, a Scan button, weeks complete out of 16, and Open.",
     "img": "shots/performance-tracking-01.webp",
     "hot": [
      {
       "x": 15.12,
       "y": 8.67,
       "w": 83.5,
       "h": 4.67
      }
     ]
    },
    {
     "title": "Scan GDrive and Curriculum",
     "say": "Scan GDrive and Curriculum checks every teacher's Drive material and curriculum updates for the week. Scan on a row checks one teacher.",
     "img": "shots/performance-tracking-01.webp",
     "hot": [
      {
       "x": 73.19,
       "y": 4.44,
       "w": 13.38,
       "h": 5.33
      },
      {
       "x": 80.68,
       "y": 12.17,
       "w": 3.63,
       "h": 3.56
      }
     ]
    },
    {
     "title": "Open a teacher evaluation",
     "say": "Open shows the weekly structure by Documentation Category. Mark each week, and Save report exports the PDF.",
     "img": "shots/performance-tracking-04.webp",
     "hot": [
      {
       "x": 15.12,
       "y": 4.11,
       "w": 83.5,
       "h": 5.56
      },
      {
       "x": 40.86,
       "y": 4.11,
       "w": 9.49,
       "h": 5.33
      }
     ]
    },
    {
     "title": "Install the helper extension (once)",
     "say": "Weekly Plans needs the MyAis helper extension. In Chrome, type chrome://extensions in the address bar and switch on Developer mode, top right.",
     "img": "shots/performance-tracking-05.webp",
     "hot": [
      {
       "x": 4.5,
       "y": 0.11,
       "w": 35.0,
       "h": 4.67
      },
      {
       "x": 87.12,
       "y": 5.94,
       "w": 11.75,
       "h": 5.0
      }
     ]
    },
    {
     "title": "Load unpacked",
     "say": "Click Load unpacked and select the folder MyAis Weekly Plan Helper that comes with the dashboard. Do not delete or move this folder later.",
     "img": "shots/performance-tracking-06.webp",
     "hot": [
      {
       "x": 1.12,
       "y": 12.67,
       "w": 8.86,
       "h": 5.11
      }
     ]
    },
    {
     "title": "Extension is ready",
     "say": "The card Alrowad Dashboard - MyAis Weekly Plan appears. Keep it switched on. After an update, click the reload arrow on this card.",
     "img": "shots/performance-tracking-07.webp",
     "hot": [
      {
       "x": 1.12,
       "y": 20.44,
       "w": 25.75,
       "h": 19.11
      },
      {
       "x": 12.51,
       "y": 33.43,
       "w": 2.44,
       "h": 4.44
      }
     ]
    },
    {
     "title": "Open Weekly Plans",
     "say": "Back in Performance Tracking, click the red Weekly plans button.",
     "img": "shots/performance-tracking-08.webp",
     "hot": [
      {
       "x": 86.51,
       "y": 4.44,
       "w": 8.43,
       "h": 5.33
      }
     ]
    },
    {
     "title": "Choose the school and week",
     "say": "Tick Boys, Girls or All. One is required. Then click the week to check.",
     "img": "shots/performance-tracking-09.webp",
     "hot": [
      {
       "x": 39.39,
       "y": 6.44,
       "w": 1.75,
       "h": 3.11
      },
      {
       "x": 67.02,
       "y": 15.33,
       "w": 10.7,
       "h": 6.44
      }
     ]
    },
    {
     "title": "MyAis checks by itself",
     "say": "MyAis opens in a new tab. Log in if asked, then leave it. The helper selects each grade, subject and week, and reads the plans. Way 1 uses Weekly Plan View; Way 2 uses Weekly Plan Report.",
     "img": "shots/performance-tracking-10.webp",
     "hot": [
      {
       "x": 14.75,
       "y": 12.67,
       "w": 54.37,
       "h": 11.38
      },
      {
       "x": 71.38,
       "y": 6.0,
       "w": 28.0,
       "h": 16.49
      }
     ]
    },
    {
     "title": "Results for every teacher",
     "say": "Each teacher shows only their own grades: a tick if the plan is filled, a cross if not. Checked teachers come first. Saving runs in the background and updates the Documentation table.",
     "img": "shots/performance-tracking-11.webp",
     "hot": [
      {
       "x": 15.38,
       "y": 10.22,
       "w": 83.0,
       "h": 17.65
      }
     ]
    },
    {
     "title": "View weekly plan",
     "say": "VIEW WEEKLY PLAN shows the actual MyAis text of each teacher: Class Work, Home Work and Quiz per day.",
     "img": "shots/performance-tracking-12.webp",
     "hot": [
      {
       "x": 60.48,
       "y": 5.33,
       "w": 10.47,
       "h": 5.33
      },
      {
       "x": 15.38,
       "y": 9.56,
       "w": 83.0,
       "h": 274.62
      }
     ]
    },
    {
     "title": "Close",
     "say": "Click the flashing Close button to return to the teachers table, now updated.",
     "img": "shots/performance-tracking-12.webp",
     "hot": [
      {
       "x": 89.38,
       "y": 5.33,
       "w": 9.0,
       "h": 5.33
      }
     ]
    }
   ]
  },
  {
   "id": "my-lecture",
   "mode": "teacher",
   "menu": "My Lecture",
   "title": "My Lecture",
   "subtitle": "Prepare and run an interactive lesson",
   "color": "#14924a",
   "intro": "Welcome. Let us prepare and run a lesson with My Lecture.",
   "outro": "That is all for My Lecture. You can replay any step from the progress bar.",
   "steps": [
    {
     "title": "Open My Lecture",
     "say": "Click My Lecture in the sidebar to prepare today's class.",
     "img": "shots/my-lecture-01.webp",
     "hot": [
      {
       "x": -0.38,
       "y": 36.0,
       "w": 15.62,
       "h": 5.11
      }
     ]
    },
    {
     "title": "Grade and week",
     "say": "Choose your grade, then click the week. The current week is highlighted.",
     "img": "shots/my-lecture-02.webp",
     "hot": [
      {
       "x": 15.12,
       "y": 4.11,
       "w": 8.69,
       "h": 5.33
      },
      {
       "x": 52.27,
       "y": 28.89,
       "w": 11.74,
       "h": 7.92
      }
     ]
    },
    {
     "title": "Topic and students",
     "say": "Pick the topic from the curriculum, and paste your class list in any format. The names are counted automatically.",
     "img": "shots/my-lecture-03.webp",
     "hot": [
      {
       "x": 16.06,
       "y": 77.78,
       "w": 60.44,
       "h": 18.0
      },
      {
       "x": 78.38,
       "y": 13.79,
       "w": 19.31,
       "h": 81.99
      }
     ]
    },
    {
     "title": "Start Lecture",
     "say": "Click Start Lecture. The activities are prepared for the topic in a few seconds.",
     "img": "shots/my-lecture-03.webp",
     "hot": [
      {
       "x": 57.67,
       "y": 4.11,
       "w": 10.16,
       "h": 5.33
      }
     ]
    },
    {
     "title": "Class Starter",
     "say": "Class Starter opens a knowledge map of the key terms. Each activity has its own timer in the header.",
     "img": "shots/my-lecture-05.webp",
     "hot": [
      {
       "x": 25.39,
       "y": 4.11,
       "w": 10.15,
       "h": 5.33
      },
      {
       "x": 86.94,
       "y": 4.44,
       "w": 7.5,
       "h": 4.67
      }
     ]
    },
    {
     "title": "Knowledge Check",
     "say": "Knowledge Check picks a student from the word cloud and asks a question.",
     "img": "shots/my-lecture-06.webp",
     "hot": [
      {
       "x": 34.7,
       "y": 4.11,
       "w": 12.5,
       "h": 5.33
      },
      {
       "x": 15.12,
       "y": 9.22,
       "w": 83.5,
       "h": 88.22
      }
     ]
    },
    {
     "title": "Group Discussion",
     "say": "Group Discussion makes the groups and reads the question aloud. The ten minute timer starts by itself.",
     "img": "shots/my-lecture-07.webp",
     "hot": [
      {
       "x": 46.36,
       "y": 4.11,
       "w": 12.29,
       "h": 5.33
      }
     ]
    },
    {
     "title": "Exit Ticket",
     "say": "Exit Ticket checks understanding at the end of the lesson.",
     "img": "shots/my-lecture-08.webp",
     "hot": [
      {
       "x": 57.82,
       "y": 4.11,
       "w": 8.99,
       "h": 5.33
      }
     ]
    },
    {
     "title": "Class Report and voice",
     "say": "Class Report shows each student's points and saves a PDF. The microphone button turns the voice on or off.",
     "img": "shots/my-lecture-09.webp",
     "hot": [
      {
       "x": 65.99,
       "y": 4.11,
       "w": 10.03,
       "h": 5.33
      },
      {
       "x": 94.19,
       "y": 4.11,
       "w": 4.44,
       "h": 5.33
      }
     ]
    }
   ]
  },
  {
   "id": "generate-weekly-plan",
   "mode": "teacher",
   "menu": "Generate Weekly Plan",
   "title": "Generate Weekly Plan",
   "subtitle": "Write the week’s plan and put it into MyAis",
   "color": "#7b3fc4",
   "intro": "Welcome. This training shows how to generate your weekly plan and update it in MyAis.",
   "outro": "That is all for Generate Weekly Plan. You can replay any step from the progress bar.",
   "steps": [
    {
     "title": "Open Generate Weekly Plan",
     "say": "Click Generate Weekly Plan in the sidebar.",
     "img": "shots/generate-weekly-plan-01.webp",
     "hot": [
      {
       "x": -0.38,
       "y": 39.89,
       "w": 15.62,
       "h": 5.11
      }
     ]
    },
    {
     "title": "Grade, week and class",
     "say": "Select the grade, the week and the class. Only the periods of that class in your timetable are used.",
     "img": "shots/generate-weekly-plan-02.webp",
     "hot": [
      {
       "x": 15.12,
       "y": 4.44,
       "w": 12.81,
       "h": 5.33
      },
      {
       "x": 27.19,
       "y": 4.44,
       "w": 9.12,
       "h": 5.33
      },
      {
       "x": 51.56,
       "y": 4.44,
       "w": 10.62,
       "h": 5.33
      }
     ]
    },
    {
     "title": "Generate",
     "say": "Click Generate. The plan is written once from the curriculum topics and saved, so the next time it opens instantly.",
     "img": "shots/generate-weekly-plan-02.webp",
     "hot": [
      {
       "x": 69.2,
       "y": 4.44,
       "w": 8.37,
       "h": 5.33
      }
     ]
    },
    {
     "title": "Review the plan",
     "say": "Class Work is placed on every lesson day, Home Work once, and Quiz where needed. Click any box to edit the text.",
     "img": "shots/generate-weekly-plan-04.webp",
     "hot": [
      {
       "x": 15.5,
       "y": 14.89,
       "w": 82.75,
       "h": 61.56
      }
     ]
    },
    {
     "title": "Update MyAis",
     "say": "Tick the other batches of the same grade if they need the same plan, then click UPDATE MyAis. Each class uses its own timetable days.",
     "img": "shots/generate-weekly-plan-04.webp",
     "hot": [
      {
       "x": 16.62,
       "y": 81.91,
       "w": 12.61,
       "h": 3.75
      },
      {
       "x": 87.37,
       "y": 9.78,
       "w": 11.13,
       "h": 5.11
      }
     ]
    },
    {
     "title": "Saved or locked",
     "say": "MyAis opens and the helper fills Class Work, Home Work and Quiz. If a week is locked in MyAis, a message lists the locked grades. Click OK.",
     "img": "shots/generate-weekly-plan-06.webp",
     "hot": [
      {
       "x": 53.06,
       "y": 58.22,
       "w": 7.62,
       "h": 5.56
      }
     ]
    }
   ]
  },
  {
   "id": "teaching-reports",
   "mode": "teacher",
   "menu": "Teaching Reports",
   "title": "Teaching Reports",
   "subtitle": "Read your evaluation and save the PDF",
   "color": "#d18a00",
   "intro": "Welcome. Here is how to read your Teaching Reports and save them as a PDF.",
   "outro": "That is all for Teaching Reports. You can replay any step from the progress bar.",
   "steps": [
    {
     "title": "Open Teaching Reports",
     "say": "Click Teaching Reports to see your own evaluation. It is read only.",
     "img": "shots/teaching-reports-01.webp",
     "hot": [
      {
       "x": -0.38,
       "y": 43.78,
       "w": 15.62,
       "h": 5.11
      }
     ]
    },
    {
     "title": "Your totals",
     "say": "The header counts Yes, Partly, No and Not checked across all weeks. The green bar shows your overall completion.",
     "img": "shots/teaching-reports-01.webp",
     "hot": [
      {
       "x": 15.12,
       "y": 4.11,
       "w": 83.5,
       "h": 5.56
      }
     ]
    },
    {
     "title": "Weekly structure",
     "say": "Each Documentation Category is a row, and each week a column: ticks are found, crosses are missing.",
     "img": "shots/teaching-reports-01.webp",
     "hot": [
      {
       "x": 15.12,
       "y": 10.75,
       "w": 83.5,
       "h": 86.69
      }
     ]
    },
    {
     "title": "Save report",
     "say": "Click Save report to download your report as a PDF with the school logo.",
     "img": "shots/teaching-reports-01.webp",
     "hot": [
      {
       "x": 23.68,
       "y": 4.11,
       "w": 9.49,
       "h": 5.33
      }
     ]
    }
   ]
  }
 ]
};
