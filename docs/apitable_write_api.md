# AITable Widget Record Writing APIs

This document provides a focused reference for all record writing/modification APIs available in AITable widgets. Use this as a quick reference for implementing record operations in your widget.

## Record Creation APIs

### `addRecord`

Creates a new record with specified cell values.

**Syntax:**
```javascript
datasheet.addRecord(valuesMap?, insertPosition?)
```

**Parameters:**
- `valuesMap` (Object, optional): Key-value pairs where keys are field IDs and values are the cell values
- `insertPosition` (Object, optional): Specifies where to insert the new record

**Returns:** 
- `Promise<string>`: A promise that resolves to the ID of the newly created record

**Example:**
```javascript
async function addNewRecord() {
  // Check permissions first
  if (datasheet.checkPermissionsForAddRecord().acceptable) {
    const newRecordId = await datasheet.addRecord({
      'fld1234567890': 'This is a text value',
      'fld0987654321': 1024,
    });
    console.log(`New record created with ID: ${newRecordId}`);
  }
}
```

**Field Value Formats:**
Different field types require specific formats:
```javascript
{
  // Text field
  'fldTextId': 'Text value',
  
  // Number field
  'fldNumberId': 123,
  
  // Single Select field (use option ID)
  'fldSingleSelectId': 'optXXXXXXXXXX',
  
  // Multiple Select field (array of option IDs)
  'fldMultipleSelectId': ['optXXXXXX1', 'optXXXXXX2'],
  
  // Attachment field
  'fldAttachmentId': [{ name: 'file.jpg', type: 'image/jpeg', ... }],
  
  // Empty a field value
  'fldAnyFieldId': null
}
```

### `addRecords`

Creates multiple new records with specified cell values.

**Syntax:**
```javascript
datasheet.addRecords(records?, insertPosition?)
```

**Parameters:**
- `records` (Array, optional): Array of objects, each containing a `valuesMap` property
- `insertPosition` (Object, optional): Specifies where to insert the new records

**Returns:**
- `Promise<string[]>`: A promise that resolves to an array of IDs for the newly created records

**Example:**
```javascript
async function addMultipleRecords() {
  // Check permissions first
  if (datasheet.checkPermissionsForAddRecords().acceptable) {
    const recordIds = await datasheet.addRecords([
      {
        valuesMap: {
          'fld1234567890': 'First record',
          'fld0987654321': 100,
        },
      },
      {
        valuesMap: {
          'fld1234567890': 'Second record',
          'fld0987654321': 200,
        },
      },
      // Empty record with no values set
      {
        valuesMap: {},
      },
    ]);
    console.log(`New records created with IDs: ${recordIds.join(', ')}`);
  }
}
```

## Record Update APIs

### `setRecord`

Updates cell values for a specific record.

**Syntax:**
```javascript
datasheet.setRecord(recordId, valuesMap?)
```

**Parameters:**
- `recordId` (string): The ID of the record to update
- `valuesMap` (Object, optional): Key-value pairs where keys are field IDs and values are the new cell values

**Returns:**
- `Promise<void>`: A promise that resolves when the update is complete

**Example:**
```javascript
async function updateRecord(recordId) {
  // Check permissions first
  if (datasheet.checkPermissionsForSetRecord(recordId).acceptable) {
    await datasheet.setRecord(recordId, {
      'fld1234567890': 'Updated text value',
      'fld0987654321': 500,
      'fldToEmpty': null,  // Clear value
    });
    console.log(`Record ${recordId} has been updated`);
  }
}
```

**Note:** To empty a field, set its value to `null`.

### `setRecords`

Updates cell values for multiple records simultaneously.

**Syntax:**
```javascript
datasheet.setRecords(records)
```

**Parameters:**
- `records` (Array): Array of objects, each containing an `id` and a `valuesMap` property

**Returns:**
- `Promise<void>`: A promise that resolves when the updates are complete

**Example:**
```javascript
async function updateMultipleRecords() {
  const recordsToUpdate = [
    {
      id: 'rec123456789',
      valuesMap: {
        'fld1234567890': 'Updated first record',
        'fld0987654321': 1000,
      },
    },
    {
      id: 'rec987654321',
      valuesMap: {
        'fld1234567890': 'Updated second record',
        'fld0987654321': 2000,
      },
    },
  ];
  
  // Check permissions first
  if (datasheet.checkPermissionsForSetRecords(recordsToUpdate).acceptable) {
    await datasheet.setRecords(recordsToUpdate);
    console.log('Records have been updated');
  }
}
```

## Field Properties Update APIs

### `updateDescription`

Updates the description of a field.

**Syntax:**
```javascript
field.updateDescription(description)
```

**Parameters:**
- `description` (null | string): The new description for the field. Use null to clear the description.

**Returns:**
- `Promise<void>`: A promise that resolves when the update is complete

**Example:**
```javascript
field.updateDescription('this is a new description')
```

**Note:** If the user doesn't have write permission, this API will throw an error.

## Record Deletion APIs

### `deleteRecord`

Deletes a specific record.

**Syntax:**
```javascript
datasheet.deleteRecord(recordId)
```

**Parameters:**
- `recordId` (string): The ID of the record to delete

**Returns:**
- `Promise<void>`: A promise that resolves when the deletion is complete

**Example:**
```javascript
async function removeRecord(recordId) {
  // Check permissions first
  if (datasheet.checkPermissionsForDeleteRecord(recordId).acceptable) {
    await datasheet.deleteRecord(recordId);
    console.log(`Record ${recordId} has been deleted`);
  }
}
```

### `deleteRecords`

Deletes multiple records simultaneously.

**Syntax:**
```javascript
datasheet.deleteRecords(recordIds)
```

**Parameters:**
- `recordIds` (Array): Array of record IDs to delete

**Returns:**
- `Promise<void>`: A promise that resolves when the deletions are complete

**Example:**
```javascript
async function removeMultipleRecords(recordIds) {
  // Check permissions first
  if (datasheet.checkPermissionsForDeleteRecords(recordIds).acceptable) {
    await datasheet.deleteRecords(recordIds);
    console.log(`${recordIds.length} records have been deleted`);
  }
}
```

## Permission Check APIs

Before performing write operations, always check if the user has the appropriate permissions. Each permission check method returns an object with:
- `acceptable` (boolean): Whether the operation is allowed
- `message` (string): Error message if not acceptable

### `checkPermissionsForAddRecord`

Checks if the user can create a record with specified values.

**Syntax:**
```javascript
datasheet.checkPermissionsForAddRecord(valuesMap?)
```

**Example:**
```javascript
// Check if user can create a specific record
const addPermission = datasheet.checkPermissionsForAddRecord({
  'fld1234567890': 'New text value',
  'fld0987654321': 1024,
});

if (addPermission.acceptable) {
  // Proceed with record creation
} else {
  console.error(addPermission.message);
}

// General check if user can create any record
const canCreateAnyRecord = datasheet.checkPermissionsForAddRecord();
```

### `checkPermissionsForAddRecords`

Checks if the user can create multiple records with specified values.

**Syntax:**
```javascript
datasheet.checkPermissionsForAddRecords(records?)
```

### `checkPermissionsForSetRecord`

Checks if the user can update a specific record.

**Syntax:**
```javascript
datasheet.checkPermissionsForSetRecord(recordId?, valuesMap?)
```

**Example:**
```javascript
// Check if user can update specific fields for a specific record
const updatePermission = datasheet.checkPermissionsForSetRecord('rec1234567890', {
  'fld1234567890': 'Updated value',
  'fld0987654321': 2048,
});

if (updatePermission.acceptable) {
  // Proceed with record update
} else {
  console.error(updatePermission.message);
}
```

### `checkPermissionsForSetRecords`

Checks if the user can update multiple records.

**Syntax:**
```javascript
datasheet.checkPermissionsForSetRecords(records?)
```

### `checkPermissionsForDeleteRecord`

Checks if the user can delete a specific record.

**Syntax:**
```javascript
datasheet.checkPermissionsForDeleteRecord(recordId)
```

### `checkPermissionsForDeleteRecords`

Checks if the user can delete multiple records.

**Syntax:**
```javascript
datasheet.checkPermissionsForDeleteRecords(recordIds)
```

## Field Type-Specific Writing Formats

Different field types require specific data formats when using record write operations. Here's a detailed reference for each field type:

### Text Field Types

#### Text / SingleText

**Write Format:** `string`

**Example:**
```javascript
datasheet.setRecord(recordId, {
  'fldTextFieldId': 'This is a text value'
});
```

#### URL

**Write Format:** `string`

**Example:**
```javascript
datasheet.setRecord(recordId, {
  'fldUrlId': 'https://example.com'
});
```

#### Email

**Write Format:** `string`

**Example:**
```javascript
datasheet.setRecord(recordId, {
  'fldEmailId': 'user@example.com'
});
```

#### Phone

**Write Format:** `string`

**Example:**
```javascript
datasheet.setRecord(recordId, {
  'fldPhoneId': '+1 123-456-7890'
});
```

#### WorkDoc (Rich Text)

**Write Format:** `string` (formatted text)

**Example:**
```javascript
datasheet.setRecord(recordId, {
  'fldWorkDocId': 'Rich text content with formatting'
});
```

### Number Field Types

#### Number

**Write Format:** `number`

**Example:**
```javascript
datasheet.setRecord(recordId, {
  'fldNumberFieldId': 123.45
});
```

#### Currency

**Write Format:** `number`

**Example:**
```javascript
datasheet.setRecord(recordId, {
  'fldCurrencyId': 99.99
});
```

#### Percent

**Write Format:** `number` (decimal format, e.g., 0.75 for 75%)

**Example:**
```javascript
datasheet.setRecord(recordId, {
  'fldPercentId': 0.75  // 75%
});
```

#### Rating

**Write Format:** `number` (from 0 to max rating value)

**Example:**
```javascript
datasheet.setRecord(recordId, {
  'fldRatingId': 4  // 4-star rating
});
```

### Select Field Types

#### SingleSelect

**Write Format:** 
- Option ID: `string`
- Option object with ID: `{ id: string }`
- Option object with name: `{ name: string }`

**Example:**
```javascript
// Using option ID
datasheet.setRecord(recordId, {
  'fldSingleSelectId': 'optXXXXXXXXXX'
});

// Or using option name (if the option exists)
datasheet.setRecord(recordId, {
  'fldSingleSelectId': { name: 'Option Name' }
});
```

#### MultiSelect

**Write Format:** 
- Array of option IDs: `string[]`
- Array of option objects with ID: `{ id: string }[]`
- Array of option objects with name: `{ name: string }[]`

**Example:**
```javascript
// Using option IDs
datasheet.setRecord(recordId, {
  'fldMultiSelectId': ['optXXXXXX1', 'optXXXXXX2']
});

// Or using option names (if the options exist)
datasheet.setRecord(recordId, {
  'fldMultiSelectId': [
    { name: 'Option One' },
    { name: 'Option Two' }
  ]
});
```

### Date & Time Field Types

#### DateTime

**Write Format:** `string` (ISO format) or `Date` object

**Example:**
```javascript
// Using string in ISO format
datasheet.setRecord(recordId, {
  'fldDateTimeId': '2023-05-15T14:30:00.000Z'
});

// Using Date object
datasheet.setRecord(recordId, {
  'fldDateTimeId': new Date()
});
```

### Boolean Field Types

#### Checkbox

**Write Format:** `boolean`

**Example:**
```javascript
datasheet.setRecord(recordId, {
  'fldCheckboxId': true  // Checked
  // 'fldCheckboxId': false or null  // Unchecked
});
```

### Link Field Types

#### OneWayLink / MagicLink / TwoWayLink

**Write Format:** `string[]` (array of record IDs)

**Example:**
```javascript
datasheet.setRecord(recordId, {
  'fldLinkId': ['recXXXXXXXXXX', 'recYYYYYYYYYY']
});
```

### User Field Types

#### Member

**Write Format:** `string[]` (array of member IDs)

**Example:**
```javascript
datasheet.setRecord(recordId, {
  'fldMemberId': ['memXXXXXXXXXX', 'memYYYYYYYYYY']
});
```

### File Field Types

#### Attachment

**Write Format:** Array of attachment objects (must be obtained from official upload API first)

**Example:**
```javascript
// You need to upload files first and get attachment objects
const attachments = [
  { 
    name: 'file.jpg', 
    type: 'image/jpeg',
    token: 'xxxxx',
    size: 12345
    // other properties returned by upload API
  }
];

datasheet.setRecord(recordId, {
  'fldAttachmentId': attachments
});
```

### Read-Only Field Types

The following field types cannot be directly written to:

- **AutoNumber** - Automatically generates sequential numbers
- **Formula** - Computed values based on other fields
- **MagicLookUp** (Lookup) - References values from other records
- **CreatedTime** - When the record was created
- **LastModifiedTime** - When the record was last modified
- **CreatedBy** - Who created the record
- **LastModifiedBy** - Who last modified the record
- **Button** - UI element that triggers automation

### Clearing Field Values

To clear a field value (set it to empty), set the value to `null`:

```javascript
datasheet.setRecord(recordId, {
  'fldTextId': null,  // Clear text field
  'fldMultiSelectId': null  // Clear multi-select field
});
```

### Complex Example With Multiple Field Types

```javascript
async function updateRecord(recordId) {
  // Check permissions first
  if (datasheet.checkPermissionsForSetRecord(recordId).acceptable) {
    await datasheet.setRecord(recordId, {
      // Text fields
      'fldTextId': 'Updated text',
      'fldSingleTextId': 'Single line text',
      
      // Number and currency
      'fldNumberId': 42,
      'fldCurrencyId': 99.99,
      
      // Select fields
      'fldSingleSelectId': 'optXXXXXXXXXX',
      'fldMultiSelectId': ['optXXXXXX1', 'optXXXXXX2'],
      
      // Date and time
      'fldDateTimeId': new Date(),
      
      // Boolean
      'fldCheckboxId': true,
      
      // Rating
      'fldRatingId': 5,
      
      // Web values
      'fldUrlId': 'https://example.com',
      'fldEmailId': 'user@example.com',
      
      // Link fields
      'fldLinkId': ['recXXXXXXXXXX', 'recYYYYYYYYYY'],
      
      // Clear a field
      'fldOldFieldId': null
    });
    console.log(`Record ${recordId} has been updated with multiple field types`);
  }
}
```

## Best Practices

1. **Always check permissions before performing write operations**
   ```javascript
   if (datasheet.checkPermissionsForSetRecord(recordId, values).acceptable) {
     await datasheet.setRecord(recordId, values);
   }
   ```

2. **Handle errors properly**
   ```javascript
   try {
     await datasheet.addRecord(values);
   } catch (error) {
     console.error('Failed to add record:', error);
   }
   ```

3. **Be aware of field types when setting values**
   Different field types require specific data formats. Refer to the Field Type-Specific Writing Formats section above.

4. **Use batch operations when possible**
   For multiple operations, use `addRecords`, `setRecords`, or `deleteRecords` instead of calling the single-record versions multiple times. 

## File Upload API

### `upload`

A method to upload files for attachment fields.

**Syntax:**
```javascript
upload(params)
```

**Parameters:**
| Name | Type | Description |
|------|------|-------------|
| params | Object | - |
| params.file | File | The file to upload |
| params.datasheetId | string | Datasheet ID |
| params.onProgress? | (response: IUploadProgress) => void | File upload progress callback method |

**Returns:**
- `Promise<IAttachmentValue>`: A promise that resolves to the attachment object that can be used in record operations

**Example:**
```javascript
import React, { useState } from 'react';
import { upload, useDatasheet } from '@apitable/widget-sdk';

function UploadFile() {
  const datasheet = useDatasheet();
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState();
  
  function uploadFile(file) {
    datasheet && upload({
      file,
      datasheetId: datasheet?.datasheetId,
      onProgress: ({ loaded, total }) => {
        setProgress(loaded / total);
      }
    }).then(response => {
      const valuesMap = { fldGi8tYQfXcc: [response] };
      const permission = datasheet.checkPermissionsForAddRecord(valuesMap);
      if (permission.acceptable) {
        datasheet.addRecord(valuesMap);
      } else {
        setError(permission.message);
      }
    });
  }
  
  return (
    <div>
      <input type="file" onChange={(e) => {
        e.target.files?.[0] && uploadFile(e.target.files[0])
      }}/>
      <p>progress: {progress}</p>
      { error && <p>error: {error}</p>}
    </div>
  )
} 