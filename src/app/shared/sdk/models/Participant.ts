/* tslint:disable */
import {
  Meeting
} from '../index';

declare var Object: any;
export interface ParticipantInterface {
  "realm"?: any;
  "username"?: any;
  "password": any;
  "email": any;
  "emailVerified"?: any;
  "verificationToken"?: any;
  "id"?: any;
  accessTokens?: any[];
  meetings?: Meeting[];
}

export class Participant implements ParticipantInterface {
  "realm": any;
  "username": any;
  "password": any;
  "email": any;
  "emailVerified": any;
  "verificationToken": any;
  "id": any;
  accessTokens: any[];
  meetings: Meeting[];
  constructor(data?: ParticipantInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Participant`.
   */
  public static getModelName() {
    return "Participant";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Participant for dynamic purposes.
  **/
  public static factory(data: ParticipantInterface): Participant{
    return new Participant(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'Participant',
      plural: 'Participants',
      properties: {
        "realm": {
          name: 'realm',
          type: 'any'
        },
        "username": {
          name: 'username',
          type: 'any'
        },
        "password": {
          name: 'password',
          type: 'any'
        },
        "email": {
          name: 'email',
          type: 'any'
        },
        "emailVerified": {
          name: 'emailVerified',
          type: 'any'
        },
        "verificationToken": {
          name: 'verificationToken',
          type: 'any'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
      },
      relations: {
        accessTokens: {
          name: 'accessTokens',
          type: 'any[]',
          model: ''
        },
        meetings: {
          name: 'meetings',
          type: 'Meeting[]',
          model: 'Meeting'
        },
      }
    }
  }
}
