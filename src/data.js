import { useLanguage } from './contexts/LanguageContext';

// هذه دالة بدلاً من مصفوفة ثابتة
export const useServicesData = () => {
  const { t } = useLanguage();
  
  return [
    {
      id: 1,
      icon: "⛽",
      title: t('services.carFuel.title'),
      description: t('services.carFuel.description')
    },
   
   
    {
      id: 5,
      icon: "📱",
      title: t('services.app.title'),
      description: t('services.app.description')
    },
    {
      id: 6,
      icon: "⏱️",
      title: t('services.fastDelivery.title'),
      description: t('services.fastDelivery.description')
    }
  ];
};