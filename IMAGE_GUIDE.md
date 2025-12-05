# Image Guide for City College Barabanki Website

This guide lists all the images that need to be added to the `public` folder for the website to display properly.

## Required Images

### Hero Carousel (Home Page)
Place these images in the `public` folder:

1. **hero1.jpg** ✅ EXISTS
   - Recommended size: 1920x1080px
   - Subject: College campus or students studying

2. **hero2.jpg** ✅ EXISTS
   - Recommended size: 1920x1080px
   - Subject: Academic activities or classroom scenes

3. **hero3.jpg** ✅ EXISTS
   - Recommended size: 1920x1080px
   - Subject: Faculty with students or academic activities

### Facilities Page
Place these images in the `public` folder:

4. **library.jpg** ✅ EXISTS
   - Recommended size: 800x600px
   - Subject: Library interior with books and students

5. **lab.jpg** ✅ EXISTS
   - Recommended size: 800x600px
   - Subject: Laboratory setup

6. **computer-lab.jpg** ✅ EXISTS
   - Recommended size: 800x600px
   - Subject: Computer lab with students

7. **hostel.jpg** ✅ EXISTS
   - Recommended size: 800x600px
   - Subject: Hostel building or rooms

### Administration Page (NEW)
Create a folder `public/admin/` and add these images:

8. **admin/chancellor.jpg** ⚠️ NEEDED
   - Recommended size: 600x600px
   - Subject: Professional photo of Chancellor

9. **admin/pro-chancellor.jpg** ⚠️ NEEDED
   - Recommended size: 600x600px
   - Subject: Professional photo of Pro Chancellor

10. **admin/vice-chancellor.jpg** ⚠️ NEEDED
    - Recommended size: 600x600px
    - Subject: Professional photo of Vice-Chancellor

11. **admin/principal.jpg** ⚠️ NEEDED
    - Recommended size: 600x600px
    - Subject: Professional photo of Principal

12. **admin/registrar.jpg** ⚠️ NEEDED
    - Recommended size: 600x600px
    - Subject: Professional photo of Registrar

13. **admin/finance.jpg** ⚠️ NEEDED
    - Recommended size: 600x600px
    - Subject: Professional photo of Finance Officer

14. **admin/coe.jpg** ⚠️ NEEDED
    - Recommended size: 600x600px
    - Subject: Professional photo of Controller of Examination

15. **admin/cvo.jpg** ⚠️ NEEDED
    - Recommended size: 600x600px
    - Subject: Professional photo of Chief Vigilance Officer

## How to Add Images

1. Place hero and facilities images directly in the `public` folder
2. Create `public/admin/` folder for administrative staff photos
3. Make sure the filenames match exactly as listed above (case-sensitive)
4. Supported formats: JPG, JPEG, PNG
5. Optimize images for web to improve loading speed

## Current Structure

```
public/
├── logo.jpeg ✅ EXISTS
├── hero1.jpg ✅ EXISTS
├── hero2.jpg ✅ EXISTS
├── hero3.jpg ✅ EXISTS
├── library.jpg ✅ EXISTS
├── lab.jpg ✅ EXISTS
├── computer-lab.jpg ✅ EXISTS
├── hostel.jpg ✅ EXISTS
└── admin/ ⚠️ FOLDER NEEDED
    ├── chancellor.jpg ⚠️ NEEDED
    ├── pro-chancellor.jpg ⚠️ NEEDED
    ├── vice-chancellor.jpg ⚠️ NEEDED
    ├── principal.jpg ⚠️ NEEDED
    ├── registrar.jpg ⚠️ NEEDED
    ├── finance.jpg ⚠️ NEEDED
    ├── coe.jpg ⚠️ NEEDED
    └── cvo.jpg ⚠️ NEEDED
```

## Fallback

If images are not found, they will show a broken image icon. Make sure to add actual images before deploying to production.

## Tips for Image Selection

- Use high-quality, professional photos
- Ensure images represent the actual college facilities
- Maintain consistent lighting and style across images
- Consider image compression to optimize loading times
- Use landscape orientation for hero images
- Ensure images are properly licensed for use
