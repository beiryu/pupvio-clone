import { PersonalAssistant } from '../personal-assistant/personal-assistant.interface';

export interface PersonalAssistantCategory {
  name: string;
  personalAssistants: PersonalAssistant[];
}
