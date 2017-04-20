## Component Hierarchy
**AuthFormContainer**
 - AuthForm

**NavBarContainer**
 - SearchBox

**Home**

**PhotoContainer**
 - Photo
 - AuthorInfo
 - PhotoInfo
  + Tags
  + Caption
 - Comments

**ProfileContainer**
 - PhotoGrid
 - PetGrid
 - FollowsGrid
 - EditProfileContainer
  + CoverPhoto
  + ProfilePhoto
  + EditProfileForm
   - UserInfo
   - PetInfo

**SearchResult**
 - SearchBar
 - PhotoGrid

**DiscoverContainer**
 - NavLinks
 - PhotoGrid

## Routes

|Path   | Component   |
|-------|-------------|
| "/sign-up" | "AuthFormContainer" |
| "/sign-in" | "AuthFormContainer" |
| "/profile/:profileId" | "ProfileContainer" |
| "/home" | "HomeContainer" |
| "/search" | "SearchResult" |
| "/photo/:photoId" | "PhotoContainer" |
| "/discover" | "DiscoverContainer" |
