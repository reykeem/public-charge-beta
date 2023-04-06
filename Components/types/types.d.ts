export interface ChargersProps {
  location: LocationData;
}

export interface ChargingStationProps {
  charger: ChargeStation;
}

export interface LocationData {
  latitude: number;
  longitude: number;
}

export interface StationModalProps {
  modal: boolean;
  toggleModal: (boolean) => void;
  charger: ChargeStation;
}

export interface ChargeStation {
  DataProvider: {
    WebsiteURL: string;
    Comments: null;
    DataProviderStatusType: {
      IsProviderEnabled: boolean;
      ID: number;
      Title: string;
    };
    IsRestrictedEdit: boolean;
    IsOpenDataLicensed: boolean;
    IsApprovedImport: boolean;
    License: string;
    DateLastImported: string;
    ID: number;
    Title: string;
  };
  OperatorInfo: {
    WebsiteURL: string;
    Comments: null;
    PhonePrimaryContact: string;
    PhoneSecondaryContact: null;
    IsPrivateIndividual: boolean;
    AddressInfo: null;
    BookingURL: null;
    ContactEmail: null;
    FaultReportEmail: null;
    IsRestrictedEdit: boolean;
    ID: number;
    Title: string;
  };
  UsageType: {
    IsPayAtLocation: null;
    IsMembershipRequired: null;
    IsAccessKeyRequired: null;
    ID: number;
    Title: string;
  };
  StatusType: {
    IsOperational: boolean;
    IsUserSelectable: boolean;
    ID: number;
    Title: string;
  };
  SubmissionStatus: {
    IsLive: boolean;
    ID: number;
    Title: string;
  };
  UserComments: null;
  PercentageSimilarity: null;
  MediaItems: null;
  IsRecentlyVerified: boolean;
  DateLastVerified: string;
  ID: number;
  UUID: string;
  ParentChargePointID: null;
  DataProviderID: number;
  DataProvidersReference: string;
  OperatorID: number;
  OperatorsReference: null;
  UsageTypeID: number;
  UsageCost: null;
  AddressInfo: {
    ID: number;
    Title: string;
    AddressLine1: string;
    AddressLine2: null;
    Town: string;
    StateOrProvince: string;
    Postcode: string;
    CountryID: number;
    Country: {
      ISOCode: string;
      ContinentCode: string;
      ID: number;
      Title: string;
    };
    Latitude: number;
    Longitude: number;
    ContactTelephone1: string;
    ContactTelephone2: null;
    ContactEmail: null;
    AccessComments: string;
    RelatedURL: string;
    Distance: number;
    DistanceUnit: number;
  };
  Connections: {
    ID: number;
    ConnectionTypeID: number;
    ConnectionType: {
      FormalName: string;
      IsDiscontinued: null;
      IsObsolete: null;
      ID: number;
      Title: string;
    };
    Reference: null;
    StatusTypeID: null;
    StatusType: null;
    LevelID: number;
    Level: {
      Comments: string;
      IsFastChargeCapable: boolean;
      ID: number;
      Title: string;
    };
    Amps: number;
    Voltage: number;
    PowerKW: number;
    CurrentTypeID: number;
    CurrentType: {
      Description: string;
      ID: number;
      Title: string;
    };
    Quantity: number;
    Comments: null;
  }[];
  NumberOfPoints: null;
  GeneralComments: null;
  DatePlanned: null;
  DateLastConfirmed: null;
  StatusTypeID: number;
  DateLastStatusUpdate: string;
  MetadataValues: null;
  DataQualityLevel: number;
  DateCreated: string;
  SubmissionStatusTypeID: number;
}
