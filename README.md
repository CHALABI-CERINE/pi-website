# Organization Website

A modern React website built with Tailwind CSS, using Google Sheets as backend. 

## 🚀 Tech Stack
- **Frontend**: React 18 + Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Backend**: Google Sheets API
- **Routing**: React Router v6

## 📁 Project Structure

See [STRUCTURE.md](./STRUCTURE.md) for detailed folder organization.

### Task Distribution
- **Homepage**: YOU
- **About Page**: Team Member 1
- **Events/Projects**: Team Member 2
- **Alumni/Testimonials**: Team Member 3
- **Contact/Q&A**: Team Member 4

## ⚙️ Setup

```bash
# Clone the repo
git clone [repo-url]
cd organization-website

# Install dependencies
npm install

# Create .env. local file
cp .env.example .env.local

# Add your Google Sheets API key and Spreadsheet ID to .env.local

# Start dev server
npm run dev
```

## 🔧 Git Workflow

1. **Pull latest changes**
   ```bash
   git checkout develop
   git pull origin develop
   ```

2. **Create your feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Commit and push**
   ```bash
   git add .
   git commit -m "feat: describe your changes"
   git push origin feature/your-feature-name
   ```

4. **Create Pull Request** on GitHub

## 📝 Google Sheets Structure

Your spreadsheet should have these sheets:
- **Events**:  id, name, date, description, location, image_url, is_open
- **Projects**: id, name, description, impact, image_url, status
- **Alumni**: id, name, role, company, story, image_url
- **Testimonials**: id, name, role, quote, event/project_id, image_url
- **FAQ**: question, answer, category
- **Partners**: name, logo_url, website, description

## 🎨 Color Palette
- Primary (Orange): #FF8C00
- Secondary (Blue): #0066CC
- Accent (White): #FFFFFF
- Dark (Black): #000000

## 📱 Responsive Design
- Mobile: 320px and up
- Tablet: 768px and up
- Desktop: 1024px and up

## 🔒 Environment Variables
```
VITE_GOOGLE_SHEETS_API_KEY=your_api_key
VITE_GOOGLE_SHEETS_ID=your_spreadsheet_id
```

## 📞 Support
If you have questions, ask in the team chat or create an issue. 