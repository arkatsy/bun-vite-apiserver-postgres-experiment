### Local development

Setup postgres with docker:

```bash
docker run --name tasks-db-postgres -e POSTGRES_PASSWORD=yourpassword -d postgres
```

Then setup the env variables listed [here](https://github.com/porsager/postgres?tab=readme-ov-file#environmental-variables).

Or you can also fill a .env file with the example provided (.env.example)

After running the image you can find the db host by doing:

```bash
# Replace 'tasks-db-postgres' with what you passed to the --name argument above
docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' tasks-db-postgres
```

By default postgres listens to 5432 and the default user is postgres.

Now run the dev server with:

```bash
# assuming you're inside the /api
bun run serve:dev # by default runs on 3000, to change it pass a port to the `SERVER_PORT` env variable
```

---

The frontend is as simple as just installing the deps and running the vite server:

```bash
# assuming you're inside the /client
bun install
```

```bash
# run the dev server
bun run dev
```
