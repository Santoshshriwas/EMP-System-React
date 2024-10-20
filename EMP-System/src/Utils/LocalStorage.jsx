
//  const employees=
//     [
//       {
//           "employee_id": 1,
//           "email": "john.doe@example.com",
//           "password": "password123",
//           "mobile": "123-456-7890"
//       },
//       {
//           "employee_id": 2,
//           "email": "jane.smith@example.com",
//           "password": "securepass456",
//           "mobile": "987-654-3210"
//       },
//       {
//           "employee_id": 3,
//           "email": "alice.johnson@example.com",
//           "password": "mypassword789",
//           "mobile": "555-123-4567"
//       },
//       {
//           "employee_id": 4,
//           "email": "bob.brown@example.com",
//           "password": "pass1234word",
//           "mobile": "444-321-9876"
//       },
//       {
//           "employee_id": 5,
//           "email": "charlie.davis@example.com",
//           "password": "password!234",
//           "mobile": "222-333-4444"
//       }
//     ]
// const admin = [
//   {
//     "id":1,
//     "email":"admin@gmail.com",
//     "password":"admin123",
//     "mobile": "222-333-4444"
//   }
// ]


const employees = [
  {
      "employee_id": 1,
      "email": "john.doe@example.com",
      "password": "password123",
      "mobile": "123-456-7890",
      "tasks": [
          {
              "active": true,
              "new_task": false,
              "completed": false,
              "failed": false,
              "title": "Complete project report",
              "description": "Finish the quarterly project report.",
              "date": "2024-10-20",
              "category": "Reporting"
          },
          {
              "active": true,
              "new_task": true,
              "completed": false,
              "failed": false,
              "title": "Attend team meeting",
              "description": "Join the weekly team meeting.",
              "date": "2024-10-22",
              "category": "Meetings"
          },
          {
              "active": false,
              "new_task": false,
              "completed": true,
              "failed": false,
              "title": "Update client information",
              "description": "Ensure all client info is up to date.",
              "date": "2024-10-18",
              "category": "Administration"
          }
      ]
  },
  {
      "employee_id": 2,
      "email": "jane.smith@example.com",
      "password": "securepass456",
      "mobile": "987-654-3210",
      "tasks": [
          {
              "active": true,
              "new_task": true,
              "completed": false,
              "failed": false,
              "title": "Create marketing plan",
              "description": "Draft a new marketing strategy for Q4.",
              "date": "2024-10-25",
              "category": "Marketing"
          },
          {
              "active": true,
              "new_task": false,
              "completed": false,
              "failed": true,
              "title": "Submit budget proposal",
              "description": "Submit the budget proposal by the deadline.",
              "date": "2024-10-20",
              "category": "Finance"
          },
          {
              "active": false,
              "new_task": false,
              "completed": true,
              "failed": false,
              "title": "Conduct market research",
              "description": "Complete the market research report.",
              "date": "2024-10-15",
              "category": "Research"
          }
      ]
  },
  {
      "employee_id": 3,
      "email": "alice.johnson@example.com",
      "password": "mypassword789",
      "mobile": "555-123-4567",
      "tasks": [
          {
              "active": true,
              "new_task": true,
              "completed": false,
              "failed": false,
              "title": "Develop new software feature",
              "description": "Work on the new user interface feature.",
              "date": "2024-10-30",
              "category": "Development"
          },
          {
              "active": true,
              "new_task": false,
              "completed": true,
              "failed": false,
              "title": "Fix bugs in existing software",
              "description": "Resolve the bugs reported in the last update.",
              "date": "2024-10-10",
              "category": "Development"
          },
          {
              "active": false,
              "new_task": false,
              "completed": true,
              "failed": false,
              "title": "Write technical documentation",
              "description": "Document the new features for the users.",
              "date": "2024-10-05",
              "category": "Documentation"
          }
      ]
  },
  {
      "employee_id": 4,
      "email": "bob.brown@example.com",
      "password": "pass1234word",
      "mobile": "444-321-9876",
      "tasks": [
          {
              "active": true,
              "new_task": true,
              "completed": false,
              "failed": false,
              "title": "Organize team-building event",
              "description": "Plan the next team-building activity.",
              "date": "2024-11-01",
              "category": "Events"
          },
          {
              "active": false,
              "new_task": false,
              "completed": false,
              "failed": true,
              "title": "Collect employee feedback",
              "description": "Gather feedback from employees about the workplace.",
              "date": "2024-10-12",
              "category": "HR"
          },
          {
              "active": false,
              "new_task": false,
              "completed": true,
              "failed": false,
              "title": "Prepare presentation for management",
              "description": "Create a presentation for the next management meeting.",
              "date": "2024-10-15",
              "category": "Presentations"
          }
      ]
  },
  {
      "employee_id": 5,
      "email": "charlie.davis@example.com",
      "password": "password!234",
      "mobile": "222-333-4444",
      "tasks": [
          {
              "active": true,
              "new_task": true,
              "completed": false,
              "failed": false,
              "title": "Review project timelines",
              "description": "Ensure project timelines are being met.",
              "date": "2024-10-28",
              "category": "Project Management"
          },
          {
              "active": true,
              "new_task": false,
              "completed": true,
              "failed": false,
              "title": "Conduct performance reviews",
              "description": "Complete performance reviews for all team members.",
              "date": "2024-10-10",
              "category": "HR"
          },
          {
              "active": false,
              "new_task": false,
              "completed": false,
              "failed": true,
              "title": "Draft policy changes",
              "description": "Prepare the draft for the new company policies.",
              "date": "2024-10-14",
              "category": "Policy"
          }
      ]
  }
];

const admin = [
  {
      "id": 1,
      "email": "admin@gmail.com",
      "password": "admin123",
      "mobile": "222-333-4444"
  }
];
export const setLocalStorage=()=>{
  // localStorage.setItem("employees",employees)
  localStorage.setItem('employees', JSON.stringify(employees));
  localStorage.setItem('admin', JSON.stringify(admin));

}
export const getLocalStorage=()=>{
  const employees = JSON.parse(localStorage.getItem('employees'));
  console.log(employees);
  const admin = JSON.parse(localStorage.getItem('admin'));
  console.log(admin);
  
  return {employees, admin};
  
  

}
