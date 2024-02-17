import { PersonalAssistantCategory } from '../personal-assistant-category/personal-assistant-category.interface';

export interface PersonalAssistant {
  category: string;
  name: string;
  avatarUrl: string;
  personalAssistantCategoryId: number;
  personalAssistantCategory: PersonalAssistantCategory;
}
