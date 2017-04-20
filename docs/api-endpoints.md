# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
- `PATCH /api/users`

### Session

- `POST /api/session`
- `DELETE /api/session`

### Photos

- `POST /api/photos`
- `GET /api/photos`
  - accepts tag_name and search_params
  - will use infinite scroll instead of pagination
- `GET /api/photos/:id`
- `DELETE /api/photos/:id`
- `GET /api/users/:id/photos`
  - index of all photos belonging to a user

### Profiles

- `POST /api/profiles`
  - creates a default blank profile upon account creation
- `GET /api/profiles/:id`
- `PATCH /api/profiles/:id`

### Pets

- `POST /api/profiles/:id/pets`
- `GET /api/profiles/:id/pets/:id`
- `PATCH /api/profiles/:id/pets/:id`
- `DELETE /api/profiles/:id/pets/:id`

### Tags

- `POST /api/photos/:id/tags`
- `GET /api/photos/:id/tags`
- `DELETE /api/photos/:id/tags/:id`

### Comments

- `POST /api/photos/:id/comments`
- `GET /api/photos/:id/comments`
- `DELETE /api/photos/:id/comments/:id`
