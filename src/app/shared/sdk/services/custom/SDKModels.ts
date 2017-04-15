/* tslint:disable */
import { Injectable } from '@angular/core';
import { Meeting } from '../../models/Meeting';
import { Participant } from '../../models/Participant';

export interface Models { [name: string]: any }

@Injectable()
export class SDKModels {

  private models: Models = {
    Meeting: Meeting,
    Participant: Participant,
    
  };

  public get(modelName: string): any {
    return this.models[modelName];
  }

  public getAll(): Models {
    return this.models;
  }

  public getModelNames(): string[] {
    return Object.keys(this.models);
  }
}
