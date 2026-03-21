# Configuration EmailJS pour le Formulaire de Contact

## Étapes de configuration

### 1. Créer un compte EmailJS

1. Allez sur https://www.emailjs.com/
2. Cliquez sur "Sign Up" et créez un compte gratuit
3. Vérifiez votre adresse email

### 2. Configurer votre service email Gmail

1. Dans votre tableau de bord EmailJS, cliquez sur **Add Service**
2. Sélectionnez **Gmail**
3. Connectez-vous à votre compte Gmail (benmampuya247@gmail.com)
4. Copiez votre **Service ID** (ex: `service_abc123xyz`)

### 3. Créer un template email

1. Dans le tableau de bord, allez à **Email Templates**
2. Cliquez sur **Create New Template**
3. Remplissez les paramètres suivants :

```
Subject: {{subject}}

Message depuis votre Portfolio:

Nom: {{firstName}} {{lastName}}
Email: {{email}}
Sujet: {{subject}}

Message:
{{message}}
```

4. Copiez votre **Template ID** (ex: `template_abc123xyz`)

### 4. Obtenir votre clé publique

1. Allez à **Account** dans le menu
2. Copiez votre **Public Key** (ex: `abc123xyz_public_key`)

### 5. Configurer les variables d'environnement

Créez ou modifiez le fichier `.env.local` à la racine de votre projet :

```
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=YOUR_PUBLIC_KEY_HERE
NEXT_PUBLIC_EMAILJS_SERVICE_ID=YOUR_SERVICE_ID_HERE
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=YOUR_TEMPLATE_ID_HERE
```

Remplacez avec vos vraies valeurs !

### 6. Mettre à jour Contact.jsx

Modifiez le fichier `src/components/Contact.jsx` et remplacez :

```javascript
// Ligne 26
emailjs.init('YOUR_EMAILJS_PUBLIC_KEY');

// Par :
emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);
```

Et modifiez la fonction handleSubmit :

```javascript
await emailjs.send(
    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
    {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'benmampuya247@gmail.com'
    }
);
```

### 7. Testez !

1. Redémarrez votre serveur de développement
2. Allez sur la page Contact de votre portfolio
3. Remplissez et envoyez le formulaire
4. Vérifiez que l'email arrive dans benmampuya247@gmail.com

## Coût

- **EmailJS Gratuit** : 200 emails par mois
- **EmailJS Pro** : Illimité (9$/mois)

Pour un portfolio, le plan gratuit devrait suffire !

## Troubleshooting

### Erreur "Invalid Service ID"
- Vérifiez votre Service ID dans EmailJS Dashboard

### Les emails ne s'envoient pas
- Vérifiez vos clés API dans `.env.local`
- Redémarrez le serveur Next.js
- Vérifiez que Gmail a bien autorisé EmailJS

### Emails vont au spam
- Configurez SPF et DKIM dans les paramètres du service Gmail sur EmailJS
