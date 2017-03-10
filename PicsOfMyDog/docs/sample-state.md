```js
{
  session: {
    currentUser: {
      id: 1,
      username: "sample_user"
    }
  },
  profile: {
    viewUser: {
      username: "sample_user",
      name: "First Last",
      biography: "This is my story.",
      cover_photo_url: "",
      profile_pic_url: ""
    }
  },
  forms: {
    signUp: { errors: [] },
    logIn: { errors: [] },
    comment: {
      author_id: 1,
      photo_id: 1,
      timestamp: 0000-00-00 00:00:00,
      body: "You can tell that it is a dog because of the way it is."
    },
    editProfile: { errors: [] }
  },
  photos: {
    1: {
      id: 1,
      title: "IMG120301301",
      description: "This is my dog",
      owner_id: 1,
      tags: {
        1: {
          id: 1,
          title: "fido",
          pet_id: 1
        },
        2: {
          id: 2,
          title: "rottweiler"
        }
      }
    }
  }
}
```
