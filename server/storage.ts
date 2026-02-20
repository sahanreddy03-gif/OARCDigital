import { type User, type InsertUser, type Lead, type InsertLead, type WebinarRegistration, type InsertWebinarRegistration } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createLead(lead: InsertLead): Promise<Lead>;
  getLeads(): Promise<Lead[]>;
  createWebinarRegistration(reg: InsertWebinarRegistration): Promise<WebinarRegistration>;
  getWebinarRegistrations(): Promise<WebinarRegistration[]>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private leads: Map<string, Lead>;
  private webinarRegs: Map<string, WebinarRegistration>;

  constructor() {
    this.users = new Map();
    this.leads = new Map();
    this.webinarRegs = new Map();
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createLead(insertLead: InsertLead): Promise<Lead> {
    const id = randomUUID();
    const lead: Lead = { ...insertLead, id, createdAt: new Date() };
    this.leads.set(id, lead);
    return lead;
  }

  async getLeads(): Promise<Lead[]> {
    return Array.from(this.leads.values());
  }

  async createWebinarRegistration(reg: InsertWebinarRegistration): Promise<WebinarRegistration> {
    const id = randomUUID();
    const registration: WebinarRegistration = { ...reg, id, createdAt: new Date() };
    this.webinarRegs.set(id, registration);
    return registration;
  }

  async getWebinarRegistrations(): Promise<WebinarRegistration[]> {
    return Array.from(this.webinarRegs.values());
  }
}

export const storage = new MemStorage();
