# App Description

Are you tired of trying to find new places to eat? Or maybe you are constantly paralysed by the thousands of reviews by strangers across multiple food review sites.

Introducing our community food review platform Dinerdex, a space for just your friends and family to share their favourite and most disliked food spots!

Imagine being able to quickly access reviews from people you trust and relate to, no more fretting about trying to remember all the fantastic food places your friends have been recommending to you.

Explore the app at this Live URL:
[ Dinerdex ]()

# User Story

- As a user, I want to be able to log a new food place into the app.
- As a user, I want to be able to edit details regarding the food place.
- As a user, I want to be able to add reviews to a food place logged by me or my community.
- As a user, I want to be able to add and view the important details regarding a food place.
- As a user, I want to be able to view a page with all the reviews for a specific food place.
- As a user, I want to be able to search and filter for the food place on the main page.

_Disclaimer_ - I decided to keep this section short, but there are many more things the user would want to do with the app, some have been implemented while others are for the future..

# Technologies Used

1. Javascript
2. CSS
3. Express JS
4. VSCode
5. MongoDB
6. Cyclic (Deployment)
7. bcrypt (Hashing Password)
8. connect-mongo (Create Session MongoDB)

# Wireframe

![Alt text](md-screenshots/Wireframe%201.png)

![Alt text](md-screenshots/Wireframe%202.png)

## Timeline for Project

4 Working Days

# App Screenshots

![Alt text](md-screenshots/Dinerdex%20Login%20.png)

![Alt text](md-screenshots/Dinerdex%20Register.png)

![Alt text](md-screenshots/Dinerdex%20Main%20Page.png)

![Alt text](md-screenshots/Dinerdex%20New%20Entry.png)

![Alt text](md-screenshots/Dinerdex%20Diner%20Details.png)

![Alt text](md-screenshots/Dinerdex%20Reviews.png)

# File & Folder Organisation

![Alt text](md-screenshots/File%20Organisation.png)

# Model Schemas

Diners model + Reviews embedded model:

```js
const reviewSchema = new Schema({
  reviewerName: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    enum: [1, 2, 3, 4, 5],
    default: 1,
    required: true,
  },
  dateVisited: {
    type: Date,
  },
  paxNo: {
    type: Number,
    default: 2,
    required: true,
  },
  billTotal: {
    type: Number,
    required: true,
  },
  comments: {
    type: String,
    required: true,
  },
});

const dinerSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    establishmentType: {
      type: String,
      enum: [
        "Cafe",
        "Hawker Stall",
        "Foodcourt Stall",
        "Regular Restaurant",
        "Fine Dining Restaurant",
        "Fastfood Restaurant",
        "Bar/Pub",
        "Casual Eatery",
        "Takeaway Kiosk",
        "Non-physical",
      ],
      default: "Cafe",
      required: true,
    },
    cuisineType: {
      type: String,
      enum: [
        "Japanese",
        "Korean",
        "Italian",
        "French",
        "Malay",
        "Chinese",
        "Indian",
        "Thai",
        "Vietnamese",
        "Australian",
        "American",
        "Mexican",
        "Spanish",
        "Mediterranean",
        "Other Asian",
        "Other Western",
        "Others",
      ],
      default: "Japanese",
      required: true,
    },
    halal: {
      type: String,
      enum: ["Unconfirmed", "Yes", "No"],
      default: "Unconfirmed",
    },
    pricingLevel: {
      type: String,
      enum: ["Low", "Fairly Low", "Medium", "Fairly High", "High"],
      default: "Low",
      required: true,
    },
    region: {
      type: String,
      enum: ["Central", "East", "North East", "North", "West"],
      default: "Central",
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    contactNo: {
      type: String,
    },
    operatingDays: {
      type: String,
    },
    operatingHours: {
      type: String,
    },
    reviews: [reviewSchema],
  },
  {
    timestamps: true,
  }
);
```

Users model:

```js
const userSchema = new Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
```

# Future Developments

1. Auto retrieval of reviewer name tagged to review
2. Possibly a login page for different groups/communities which are available to user
3. Edit feature only available for users who created the entry or review
4. Plus much much more...

# Summary
