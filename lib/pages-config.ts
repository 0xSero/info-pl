export interface PageConfig {
  slug: string;
  category: string;
  titleKey: string;
  descriptionKey: string;
  icon: string;
}

export const categories = [
  'legal-documents',
  'healthcare',
  'finance',
  'housing',
  'transportation',
  'daily-life',
  'work-business',
  'education',
  'culture-integration',
] as const;

export type Category = (typeof categories)[number];

export const pagesConfig: PageConfig[] = [
  // Legal & Documents (15 pages)
  { slug: 'pesel-number', category: 'legal-documents', titleKey: 'pesel.title', descriptionKey: 'pesel.description', icon: 'FileText' },
  { slug: 'nip-tax-id', category: 'legal-documents', titleKey: 'nip.title', descriptionKey: 'nip.description', icon: 'FileText' },
  { slug: 'temporary-residence-permit', category: 'legal-documents', titleKey: 'tempResidence.title', descriptionKey: 'tempResidence.description', icon: 'Home' },
  { slug: 'permanent-residence-permit', category: 'legal-documents', titleKey: 'permResidence.title', descriptionKey: 'permResidence.description', icon: 'Home' },
  { slug: 'work-permit', category: 'legal-documents', titleKey: 'workPermit.title', descriptionKey: 'workPermit.description', icon: 'Briefcase' },
  { slug: 'eu-blue-card', category: 'legal-documents', titleKey: 'blueCard.title', descriptionKey: 'blueCard.description', icon: 'CreditCard' },
  { slug: 'polish-citizenship', category: 'legal-documents', titleKey: 'citizenship.title', descriptionKey: 'citizenship.description', icon: 'Flag' },
  { slug: 'registering-address', category: 'legal-documents', titleKey: 'address.title', descriptionKey: 'address.description', icon: 'MapPin' },
  { slug: 'passport-requirements', category: 'legal-documents', titleKey: 'passport.title', descriptionKey: 'passport.description', icon: 'Book' },
  { slug: 'visa-types', category: 'legal-documents', titleKey: 'visa.title', descriptionKey: 'visa.description', icon: 'Stamp' },
  { slug: 'karta-pobytu', category: 'legal-documents', titleKey: 'kartaPobytu.title', descriptionKey: 'kartaPobytu.description', icon: 'CreditCard' },
  { slug: 'meldunek', category: 'legal-documents', titleKey: 'meldunek.title', descriptionKey: 'meldunek.description', icon: 'MapPin' },
  { slug: 'drivers-license-exchange', category: 'legal-documents', titleKey: 'licenseExchange.title', descriptionKey: 'licenseExchange.description', icon: 'Car' },
  { slug: 'birth-certificate-registration', category: 'legal-documents', titleKey: 'birthCert.title', descriptionKey: 'birthCert.description', icon: 'Baby' },
  { slug: 'marriage-registration', category: 'legal-documents', titleKey: 'marriage.title', descriptionKey: 'marriage.description', icon: 'Heart' },

  // Healthcare (10 pages)
  { slug: 'nfz-health-insurance', category: 'healthcare', titleKey: 'nfz.title', descriptionKey: 'nfz.description', icon: 'Heart' },
  { slug: 'finding-a-doctor', category: 'healthcare', titleKey: 'doctor.title', descriptionKey: 'doctor.description', icon: 'Stethoscope' },
  { slug: 'emergency-services', category: 'healthcare', titleKey: 'emergency.title', descriptionKey: 'emergency.description', icon: 'Ambulance' },
  { slug: 'pharmacies-and-prescriptions', category: 'healthcare', titleKey: 'pharmacy.title', descriptionKey: 'pharmacy.description', icon: 'Pill' },
  { slug: 'dental-care', category: 'healthcare', titleKey: 'dental.title', descriptionKey: 'dental.description', icon: 'Smile' },
  { slug: 'mental-health-services', category: 'healthcare', titleKey: 'mentalHealth.title', descriptionKey: 'mentalHealth.description', icon: 'Brain' },
  { slug: 'vaccinations', category: 'healthcare', titleKey: 'vaccinations.title', descriptionKey: 'vaccinations.description', icon: 'Syringe' },
  { slug: 'health-insurance-foreigners', category: 'healthcare', titleKey: 'healthInsurance.title', descriptionKey: 'healthInsurance.description', icon: 'Shield' },
  { slug: 'hospital-care', category: 'healthcare', titleKey: 'hospital.title', descriptionKey: 'hospital.description', icon: 'Building' },
  { slug: 'pregnancy-and-maternity', category: 'healthcare', titleKey: 'maternity.title', descriptionKey: 'maternity.description', icon: 'Baby' },

  // Finance (10 pages)
  { slug: 'opening-bank-account', category: 'finance', titleKey: 'bankAccount.title', descriptionKey: 'bankAccount.description', icon: 'Building' },
  { slug: 'credit-cards', category: 'finance', titleKey: 'creditCard.title', descriptionKey: 'creditCard.description', icon: 'CreditCard' },
  { slug: 'loans-for-foreigners', category: 'finance', titleKey: 'loans.title', descriptionKey: 'loans.description', icon: 'DollarSign' },
  { slug: 'pit-tax-returns', category: 'finance', titleKey: 'pit.title', descriptionKey: 'pit.description', icon: 'FileText' },
  { slug: 'zus-social-security', category: 'finance', titleKey: 'zus.title', descriptionKey: 'zus.description', icon: 'Shield' },
  { slug: 'currency-exchange', category: 'finance', titleKey: 'currencyExchange.title', descriptionKey: 'currencyExchange.description', icon: 'ArrowLeftRight' },
  { slug: 'sending-money-abroad', category: 'finance', titleKey: 'moneyAbroad.title', descriptionKey: 'moneyAbroad.description', icon: 'Send' },
  { slug: 'mortgage-for-foreigners', category: 'finance', titleKey: 'mortgage.title', descriptionKey: 'mortgage.description', icon: 'Home' },
  { slug: 'tax-deductions', category: 'finance', titleKey: 'taxDeductions.title', descriptionKey: 'taxDeductions.description', icon: 'Calculator' },
  { slug: 'cryptocurrency-regulations', category: 'finance', titleKey: 'crypto.title', descriptionKey: 'crypto.description', icon: 'Bitcoin' },

  // Housing (10 pages)
  { slug: 'renting-apartment', category: 'housing', titleKey: 'renting.title', descriptionKey: 'renting.description', icon: 'Home' },
  { slug: 'buying-property', category: 'housing', titleKey: 'buyingProperty.title', descriptionKey: 'buyingProperty.description', icon: 'Building' },
  { slug: 'utilities-setup', category: 'housing', titleKey: 'utilities.title', descriptionKey: 'utilities.description', icon: 'Zap' },
  { slug: 'internet-providers', category: 'housing', titleKey: 'internet.title', descriptionKey: 'internet.description', icon: 'Wifi' },
  { slug: 'tenant-rights', category: 'housing', titleKey: 'tenantRights.title', descriptionKey: 'tenantRights.description', icon: 'Scale' },
  { slug: 'real-estate-agencies', category: 'housing', titleKey: 'realEstate.title', descriptionKey: 'realEstate.description', icon: 'Building2' },
  { slug: 'security-deposits', category: 'housing', titleKey: 'deposit.title', descriptionKey: 'deposit.description', icon: 'Lock' },
  { slug: 'rental-contracts', category: 'housing', titleKey: 'rentalContract.title', descriptionKey: 'rentalContract.description', icon: 'FileSignature' },
  { slug: 'housing-prices-by-city', category: 'housing', titleKey: 'housingPrices.title', descriptionKey: 'housingPrices.description', icon: 'TrendingUp' },
  { slug: 'student-housing', category: 'housing', titleKey: 'studentHousing.title', descriptionKey: 'studentHousing.description', icon: 'GraduationCap' },

  // Transportation (10 pages)
  { slug: 'public-transportation', category: 'transportation', titleKey: 'publicTransport.title', descriptionKey: 'publicTransport.description', icon: 'Bus' },
  { slug: 'buying-a-car', category: 'transportation', titleKey: 'buyingCar.title', descriptionKey: 'buyingCar.description', icon: 'Car' },
  { slug: 'car-insurance', category: 'transportation', titleKey: 'carInsurance.title', descriptionKey: 'carInsurance.description', icon: 'Shield' },
  { slug: 'vehicle-registration', category: 'transportation', titleKey: 'vehicleReg.title', descriptionKey: 'vehicleReg.description', icon: 'FileText' },
  { slug: 'parking-rules', category: 'transportation', titleKey: 'parking.title', descriptionKey: 'parking.description', icon: 'ParkingCircle' },
  { slug: 'traffic-fines', category: 'transportation', titleKey: 'trafficFines.title', descriptionKey: 'trafficFines.description', icon: 'AlertCircle' },
  { slug: 'drivers-license', category: 'transportation', titleKey: 'driversLicense.title', descriptionKey: 'driversLicense.description', icon: 'IdCard' },
  { slug: 'international-driving-permit', category: 'transportation', titleKey: 'intlDriving.title', descriptionKey: 'intlDriving.description', icon: 'Globe' },
  { slug: 'train-travel-pkp', category: 'transportation', titleKey: 'trains.title', descriptionKey: 'trains.description', icon: 'Train' },
  { slug: 'airport-connections', category: 'transportation', titleKey: 'airport.title', descriptionKey: 'airport.description', icon: 'Plane' },

  // Daily Life (15 pages)
  { slug: 'sunday-shopping-laws', category: 'daily-life', titleKey: 'sundayShopping.title', descriptionKey: 'sundayShopping.description', icon: 'ShoppingCart' },
  { slug: 'polish-holidays', category: 'daily-life', titleKey: 'holidays.title', descriptionKey: 'holidays.description', icon: 'Calendar' },
  { slug: 'waste-sorting', category: 'daily-life', titleKey: 'wasteSorting.title', descriptionKey: 'wasteSorting.description', icon: 'Trash' },
  { slug: 'supermarkets-guide', category: 'daily-life', titleKey: 'supermarkets.title', descriptionKey: 'supermarkets.description', icon: 'ShoppingBag' },
  { slug: 'polish-postal-service', category: 'daily-life', titleKey: 'postal.title', descriptionKey: 'postal.description', icon: 'Mail' },
  { slug: 'mobile-phone-plans', category: 'daily-life', titleKey: 'mobile.title', descriptionKey: 'mobile.description', icon: 'Smartphone' },
  { slug: 'electricity-providers', category: 'daily-life', titleKey: 'electricity.title', descriptionKey: 'electricity.description', icon: 'Lightbulb' },
  { slug: 'water-bills', category: 'daily-life', titleKey: 'water.title', descriptionKey: 'water.description', icon: 'Droplet' },
  { slug: 'heating-systems', category: 'daily-life', titleKey: 'heating.title', descriptionKey: 'heating.description', icon: 'Flame' },
  { slug: 'polish-language-courses', category: 'daily-life', titleKey: 'languageCourses.title', descriptionKey: 'languageCourses.description', icon: 'BookOpen' },
  { slug: 'pet-registration', category: 'daily-life', titleKey: 'pets.title', descriptionKey: 'pets.description', icon: 'Dog' },
  { slug: 'recycling-rules', category: 'daily-life', titleKey: 'recycling.title', descriptionKey: 'recycling.description', icon: 'Recycle' },
  { slug: 'emergency-numbers', category: 'daily-life', titleKey: 'emergencyNumbers.title', descriptionKey: 'emergencyNumbers.description', icon: 'Phone' },
  { slug: 'weather-and-seasons', category: 'daily-life', titleKey: 'weather.title', descriptionKey: 'weather.description', icon: 'Cloud' },
  { slug: 'time-zones', category: 'daily-life', titleKey: 'timeZones.title', descriptionKey: 'timeZones.description', icon: 'Clock' },

  // Work & Business (10 pages)
  { slug: 'finding-a-job', category: 'work-business', titleKey: 'findingJob.title', descriptionKey: 'findingJob.description', icon: 'Search' },
  { slug: 'employment-contract', category: 'work-business', titleKey: 'employment.title', descriptionKey: 'employment.description', icon: 'FileSignature' },
  { slug: 'minimum-wage', category: 'work-business', titleKey: 'minWage.title', descriptionKey: 'minWage.description', icon: 'DollarSign' },
  { slug: 'starting-a-business', category: 'work-business', titleKey: 'business.title', descriptionKey: 'business.description', icon: 'Store' },
  { slug: 'freelancing-regulations', category: 'work-business', titleKey: 'freelancing.title', descriptionKey: 'freelancing.description', icon: 'Laptop' },
  { slug: 'unemployment-benefits', category: 'work-business', titleKey: 'unemployment.title', descriptionKey: 'unemployment.description', icon: 'HandCoins' },
  { slug: 'sick-leave', category: 'work-business', titleKey: 'sickLeave.title', descriptionKey: 'sickLeave.description', icon: 'Bed' },
  { slug: 'maternity-paternity-leave', category: 'work-business', titleKey: 'parentalLeave.title', descriptionKey: 'parentalLeave.description', icon: 'BabyCarriage' },
  { slug: 'annual-leave', category: 'work-business', titleKey: 'annualLeave.title', descriptionKey: 'annualLeave.description', icon: 'Palmtree' },
  { slug: 'remote-work-regulations', category: 'work-business', titleKey: 'remoteWork.title', descriptionKey: 'remoteWork.description', icon: 'Home' },

  // Education (10 pages)
  { slug: 'school-enrollment', category: 'education', titleKey: 'schoolEnrollment.title', descriptionKey: 'schoolEnrollment.description', icon: 'School' },
  { slug: 'universities-for-foreigners', category: 'education', titleKey: 'universities.title', descriptionKey: 'universities.description', icon: 'GraduationCap' },
  { slug: 'scholarship-programs', category: 'education', titleKey: 'scholarships.title', descriptionKey: 'scholarships.description', icon: 'Award' },
  { slug: 'kindergartens', category: 'education', titleKey: 'kindergarten.title', descriptionKey: 'kindergarten.description', icon: 'Baby' },
  { slug: 'polish-language-certification', category: 'education', titleKey: 'certification.title', descriptionKey: 'certification.description', icon: 'Certificate' },
  { slug: 'student-visa', category: 'education', titleKey: 'studentVisa.title', descriptionKey: 'studentVisa.description', icon: 'Stamp' },
  { slug: 'recognizing-foreign-diplomas', category: 'education', titleKey: 'diplomaRecognition.title', descriptionKey: 'diplomaRecognition.description', icon: 'FileCheck' },
  { slug: 'international-schools', category: 'education', titleKey: 'intlSchools.title', descriptionKey: 'intlSchools.description', icon: 'Globe2' },
  { slug: 'vocational-training', category: 'education', titleKey: 'vocational.title', descriptionKey: 'vocational.description', icon: 'Wrench' },
  { slug: 'adult-education', category: 'education', titleKey: 'adultEducation.title', descriptionKey: 'adultEducation.description', icon: 'BookOpen' },

  // Culture & Integration (10 pages)
  { slug: 'polish-customs-etiquette', category: 'culture-integration', titleKey: 'customs.title', descriptionKey: 'customs.description', icon: 'Users' },
  { slug: 'religious-holidays', category: 'culture-integration', titleKey: 'religiousHolidays.title', descriptionKey: 'religiousHolidays.description', icon: 'Church' },
  { slug: 'name-days', category: 'culture-integration', titleKey: 'nameDays.title', descriptionKey: 'nameDays.description', icon: 'Calendar' },
  { slug: 'polish-cuisine', category: 'culture-integration', titleKey: 'cuisine.title', descriptionKey: 'cuisine.description', icon: 'UtensilsCrossed' },
  { slug: 'expat-communities', category: 'culture-integration', titleKey: 'expat.title', descriptionKey: 'expat.description', icon: 'Users2' },
  { slug: 'integration-programs', category: 'culture-integration', titleKey: 'integration.title', descriptionKey: 'integration.description', icon: 'Handshake' },
  { slug: 'polish-history-basics', category: 'culture-integration', titleKey: 'history.title', descriptionKey: 'history.description', icon: 'Book' },
  { slug: 'cultural-events', category: 'culture-integration', titleKey: 'events.title', descriptionKey: 'events.description', icon: 'PartyPopper' },
  { slug: 'sports-and-recreation', category: 'culture-integration', titleKey: 'sports.title', descriptionKey: 'sports.description', icon: 'Trophy' },
  { slug: 'making-polish-friends', category: 'culture-integration', titleKey: 'friends.title', descriptionKey: 'friends.description', icon: 'Heart' },
];

export const categoryNames: Record<Category, string> = {
  'legal-documents': 'Legal & Documents',
  'healthcare': 'Healthcare',
  'finance': 'Finance',
  'housing': 'Housing',
  'transportation': 'Transportation',
  'daily-life': 'Daily Life',
  'work-business': 'Work & Business',
  'education': 'Education',
  'culture-integration': 'Culture & Integration',
};
