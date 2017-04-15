/* tslint:disable */
import {
  Participant
} from '../index';

declare var Object: any;
export interface MeetingInterface {
  "title": any;
  "startTime"?: any;
  "endTime"?: any;
  "id"?: any;
  participants?: Participant[];
}

export class Meeting implements MeetingInterface {
  "title": any;
  "startTime": any;
  "endTime": any;
  "id": any;
  participants: Participant[];
  constructor(data?: MeetingInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Meeting`.
   */
  public static getModelName() {
    return "Meeting";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Meeting for dynamic purposes.
  **/
  public static factory(data: MeetingInterface): Meeting{
    return new Meeting(data);
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
      name: 'Meeting',
      plural: 'Meetings',
      properties: {
        "title": {
          name: 'title',
          type: 'any'
        },
        "startTime": {
          name: 'startTime',
          type: 'any'
        },
        "endTime": {
          name: 'endTime',
          type: 'any'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
      },
      relations: {
        participants: {
          name: 'participants',
          type: 'Participant[]',
          model: 'Participant'
        },
      }
    }
  }
}
