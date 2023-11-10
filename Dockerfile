FROM node:20.9-bookworm

WORKDIR /course-green-smart

ENV PORT=5001

ENV MONGODB_URL=mongodb://localhost:27017/

COPY . . 

RUN yarn install && npm run build

CMD [ "npm", "run", "start" ]

EXPOSE 5001

