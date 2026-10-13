# Anil Mala's Vision Academy

Website for Anil Mala's Vision Academy, Ring Road, Jalgaon. Coaching for standards 5 to 10 (Maharashtra State Board and CBSE, Semi-English and English), class 11 and 12 Science, and a batch for JEE, NEET, and MHT-CET.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

`npm run dev` is for editing. It recompiles each page and does not compress images, so it feels slower than the live build. Use this for the faster version:

```bash
npm run build
npm start
```

## Pages

Home, About, Courses, Admissions, Mentors, Achievements, Gallery, Contact, Notices, and Cookie policy.

## Edit the content

Academy address, courses, notices, and the WhatsApp number live in `data/content.js`. Change `academy.whatsapp` to the academy's own number before sharing the site. It must be the full number with country code and no spaces or plus sign, for example `919876543210`.

Photos are in `public/images`. The header logo is `logo.png`. Classroom photos are samples until pictures from the centre are added.

## Enquiries

The admission form posts to `/api/enquiry` and appends each message to `enquiries.log` in the project folder. That file is not committed. The form does not send email.
