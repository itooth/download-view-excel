# AITable Widget Record Reading APIs

This document provides a focused reference for all record reading APIs available in AITable widgets. Use this as a quick reference for implementing data retrieval in your widget.

> **Updated:** This documentation now includes detailed return types for the `getCellValue` method for all field types, showing what data structure is returned for each AITable field type.

## Basic Record Reading APIs

### `useRecord`

Retrieves a single record by its ID.

**Syntax:**
```javascript
const record = useRecord(recordId);
```

**Parameters:**
- `recordId` (string): ID of the record to retrieve

**Returns:**
- A record object or `null` if the record doesn't exist

**Example:**
```javascript
import { useRecord } from '@apitable/widget-sdk';

function SingleRecordComponent({ recordId }) {
  const record = useRecord(recordId);
  
  if (!record) {
    return <div>Record not found</div>;
  }
  
  return (
    <div>
      <h3>Record ID: {record.id}</h3>
      <pre>{JSON.stringify(record.getCellValueString('fldXXXXXXXXXX'), null, 2)}</pre>
    </div>
  );
}
```

### `useRecords`

Retrieves all records in the current view or a specific set of records by their IDs.

**Syntax:**
```javascript
const records = useRecords();  // All records in current view
// OR
const records = useRecords(recordIds);  // Specific records by IDs
// OR
const records = useRecords(query);  // Advanced query with filters
```

**Parameters:**
- `recordIds` (Array, optional): Array of record IDs to retrieve. If omitted, returns all records in the current view.
- `query` (IRecordQuery, optional): Advanced query object with the following properties:
  - `ids` (string[], optional): Specify which recordId data to query. If explicitly set to undefined, returns empty data. If this parameter is not passed, no filtering by ID will be applied.
  - `filter` (IOpenFilterConditionGroup, optional): Filter condition to apply to the records.

**Returns:**
- An array of record objects

**Example:**
```javascript
import { useRecords } from '@apitable/widget-sdk';

// Basic usage
function RecordListComponent() {
  const records = useRecords();
  
  return (
    <div>
      <h3>Total Records: {records.length}</h3>
      <ul>
        {records.map(record => (
          <li key={record.id}>
            {record.getCellValueString('fldXXXXXXXXXX')}
          </li>
        ))}
      </ul>
    </div>
  );
}

// Advanced query with filters
function FilteredRecordListComponent() {
  const records = useRecords({
    ids: ['recXXXXXXXX', 'recYYYYYYYY'], // Only fetch specific records
    filter: {
      conjunction: 'and',
      conditions: [
        {
          fieldId: 'fldNumberField',
          operator: 'greaterThan',
          value: 100
        }
      ]
    }
  });
  
  return (
    <div>
      <h3>Filtered Records: {records.length}</h3>
      <ul>
        {records.map(record => (
          <li key={record.id}>
            {record.getCellValueString('fldNumberField')}
          </li>
        ))}
      </ul>
    </div>
  );
}
```

## Record Object Methods

Each record object provides methods to access cell values:

### `getCellValue`

Gets the raw cell value for a specific field.

**Syntax:**
```javascript
record.getCellValue(fieldId);
```

**Parameters:**
- `fieldId` (string): ID of the field

**Returns:**
- The raw cell value in its native format (varies by field type)

**Return Types by Field Type:**

| Field Type | Return Type | Description |
|------------|-------------|-------------|
| Text | `string` | A string of text |
| SingleText | `string` | A single line of text |
| Number | `number` | A numeric value |
| SingleSelect | `{ id: string, name: string, color: { name: string, value: string } }` | An option object with id, name and color properties |
| MultiSelect | `{ id: string, name: string, color: { name: string, value: string } }[]` | An array of option objects |
| DateTime | `string` | Date/time as string |
| Attachment | `IAttachmentValue` | Attachment metadata object |
| URL | `string` | URL string |
| Email | `string` | Email address string |
| Phone | `string` | Phone number string |
| Checkbox | `boolean` | Boolean value (true when checked, null when unchecked) |
| Rating | `number` | Rating value as number |
| Member | `{ id: string, type: 'Team' | 'Member', name: string, avatar?: string }[]` | Array of member objects |
| Currency | `number` | Currency amount as number |
| Percent | `number` | Percentage as number |
| OneWayLink | `{ recordId: string, title: string }[]` | Array of linked record objects |
| MagicLink | `{ recordId: string, title: string }[]` | Array of linked record objects |
| TwoWayLink | `{ recordId: string, title: string }[]` | Array of linked record objects |
| MagicLookUp | Array of cell values | Array of referenced cell values (one or two-dimensional) |
| Formula | `null | string | number | boolean | string[] | number[] | boolean` | Result of formula calculation |
| AutoNumber | `number` | Auto-incremented number |
| CreatedTime | `string` | Creation time string |
| LastModifiedTime | `string` | Last modification time string |
| CreatedBy | `string` | Creator ID string |
| LastModifiedBy | `string` | Last modifier ID string |
| Cascader | `string` | Selected cascader value |
| WorkDoc | `string` | Rich text content |

twoWayLink 返回例子：
[
{
  "recordId": "reccwXhMh1208",
  "title": "唐勇"
},
{
  "recordId": "recMvDsewGEgM",
  "title": "王铁军"
},
...
]

**Note:** The values obtained by getCellValue are supported for writing to the cell.

**Example:**
```javascript
const numberValue = record.getCellValue('fldNumberField'); // Returns a number
const selectValue = record.getCellValue('fldSingleSelect'); // Returns an option object
const multiSelectValue = record.getCellValue('fldMultiSelect'); // Returns an array of option objects
```

### `getCellValueString`

Gets the formatted string representation of a cell value.

**Syntax:**
```javascript
record.getCellValueString(fieldId);
```

**Parameters:**
- `fieldId` (string): ID of the field

**Returns:**
- String representation of the cell value

**Example:**
```javascript
const formattedNumber = record.getCellValueString('fldNumberField'); // "1,234.56"
const selectLabel = record.getCellValueString('fldSingleSelect'); // "Option Label"
const multiSelectLabels = record.getCellValueString('fldMultiSelect'); // "Option 1, Option 2"
```

### `getCellValueInTimeZone`

Gets date/time field values in a specific timezone.

**Syntax:**
```javascript
record.getCellValueInTimeZone(fieldId);
```

**Parameters:**
- `fieldId` (string): ID of the datetime field

**Returns:**
- Date object adjusted for the user's timezone

### `description`

Returns the description of the current field.

**Syntax:**
```javascript
get description(): null | string
```

**Returns:**
- `null | string`: The description of the field if available, or null if no description is set

**Example:**
```javascript
console.log(myField.description);
// => 'This is my field'
```

## Field and View Access APIs

### `useFields`

Gets all fields from the current view. When field properties or column order changes, it will trigger re-rendering.

If no viewId is provided, an empty array will be returned.

**Syntax:**
```javascript
const fields = useFields(viewId);
// OR
const fields = useFields(viewId, query);
// OR
const fields = useFields(datasheet, viewId, query);
```

**Parameters:**
- `viewId` (string | undefined): ID of the view
- `query` (IFieldQuery, optional): Optional parameter to specify which fieldId data to query
- `datasheet` (Datasheet | undefined): Datasheet instance, obtained through useDatasheet

**Returns:**
- An array of field objects (Field[])

**Example:**
```javascript
import { useFields, useActiveViewId } from '@apitable/widget-sdk';

// Display all field names
function FieldNames() {
  const viewId = useActiveViewId();
  const fields = useFields(viewId);
  return (
    <div>
      {fields.map(field => <p key={field.id}>{field.name}</p>)}
    </div>
  );
}

// Display all field names from a specific datasheet
function DatasheetFieldNames() {
  const datasheet = useDatasheet('dstXXXXXXXX');
  const fields = useFields(datasheet, 'vieXXXXXXX');
  return (
    <div>
      {fields.map(field => <p key={field.id}>{field.name}</p>)}
    </div>
  );
}

### `useActiveViewId`

Gets the ID of the currently active view.

**Syntax:**
```javascript
const activeViewId = useActiveViewId();
```

**Returns:**
- String ID of the active view

### `useViewIds`

Gets IDs of all views in the datasheet.

**Syntax:**
```javascript
const viewIds = useViewIds();
```

**Returns:**
- Array of view ID strings

### `useView`

Gets information about a specific view.

**Syntax:**
```javascript
const view = useView(viewId);
```

**Parameters:**
- `viewId` (string): ID of the view to retrieve

**Returns:**
- View object with properties like `id`, `name`, `type`, etc.

## Advanced Data Filtering

### `useRecordsAll`

Gets all records in the datasheet regardless of view filters. When record values, view configuration, or field configuration changes, it will trigger re-rendering. Retrieving all records may cause computational overhead and performance issues, so use cautiously and with thorough testing.

**Syntax:**
```javascript
const records = useRecordsAll();
// OR
const records = useRecordsAll(datasheet);
```

**Parameters:**
- `datasheet` (Datasheet, optional): Datasheet instance. If not provided, the currently bound datasheet will be used by default.

**Returns:**
- Array of all record objects in the datasheet, regardless of view filters

**Example:**
```javascript
import { useRecordsAll, useDatasheet } from '@apitable/widget-sdk';

// Display the primary keys of all records in the currently bound datasheet
function RecordsTitle() {
  const records = useRecordsAll();
  return (
    <div>
      {records.map(record => <p key={record.id}>{record.title}</p>)}
    </div>
  );
}

// Display the primary keys of all records from a specific datasheet by ID
function DatasheetRecordsTitle() {
  const datasheet = useDatasheet('dstXXXXXXXX');
  const records = useRecordsAll(datasheet);
  return (
    <div>
      {records.map(record => <p key={record.id}>{record.title}</p>)}
    </div>
  );
}

## Selection and Current State APIs

### `useSelection`

Gets the currently selected cell(s) in the datasheet.

**Syntax:**
```javascript
const selection = useSelection();
```

**Returns:**
- Selection object with properties like `activeCell`, `recordIds`, etc.

**Example:**
```javascript
import { useSelection } from '@apitable/widget-sdk';

function SelectionComponent() {
  const selection = useSelection();
  
  if (!selection) {
    return <div>No selection</div>;
  }
  
  return (
    <div>
      <h3>Selected Records: {selection.recordIds.length}</h3>
      <p>Active Field: {selection.activeCell?.fieldId}</p>
      <p>Active Record: {selection.activeCell?.recordId}</p>
    </div>
  );
}
```

### `useActiveCell`

Gets the currently active cell in the datasheet.

**Syntax:**
```javascript
const activeCell = useActiveCell();
```

**Returns:**
- Active cell object with `fieldId` and `recordId` properties, or `null` if no cell is active

### `useActiveViewId`

Gets the ID of the currently active view.

**Syntax:**
```javascript
const activeViewId = useActiveViewId();
```

**Returns:**
- String ID of the active view

## Datasheet Metadata

### `useDatasheet`

Gets the datasheet object with methods to access and manipulate the datasheet.

**Syntax:**
```javascript
const datasheet = useDatasheet();
// OR
const datasheet = useDatasheet(datasheetId);
```

**Parameters:**
- `datasheetId` (string, optional): ID of the datasheet to retrieve. If not provided, the currently bound datasheet will be used.

**Returns:**
- A Datasheet object or `undefined` if the datasheet doesn't exist


**Chinese Description:**

用于将 React 组件链接到 datasheet 的 hook。datasheet 会提供对表格数据进行修改的接口，并提供对应的权限检查接口。

**参数:**
- `datasheetId` (string, 可选): 要获取的数据表 ID。如果未提供，则使用当前绑定的数据表。

**返回值:**
- Datasheet 实例或 `undefined`（如果数据表不存在）

**示例:**
```javascript
import { useDatasheet } from '@apitable/widget-sdk';

function AddRecord() {
  const datasheet = useDatasheet();
  const [error, setError] = useState();
  // 参数的 key 为 fieldId， value 为单元格值
  const valuesMap = {
    fld1234567980: 'this is a text value',
    fld0987654321: 1024,
  }
  function addRecord(valuesMap) {
    if (!datasheet) {
      return;
    }
    const permission = datasheet.checkPermissionsForAddRecord(valuesMap)
    if (permission.acceptable) {
      datasheet.addRecord(valuesMap);
      return;
    }
    setError(permission.message);
  }
  return (<div>
    {error && <p>{error}</p>}
    <button onClick={() => addRecord(valuesMap)}>新增一行</button>
  </div>);
}
```

### `useViewsMeta`

Gets metadata for all views.

**Syntax:**
```javascript
const viewsMeta = useViewsMeta();
```

**Returns:**
- Array of `IViewMeta` objects with the following properties:
  - `id` (string): ID of the view
  - `type` (ViewType): Type of the view
  - `name` (string): Name of the view
  - `hidden` (boolean, optional): Whether the view is hidden
  - `groupInfo` (IGroupInfo, optional): Grouping information for the view
    - `IGroupInfo` is defined as `ISortedField[]`
  - `filterInfo` (IFilterInfo, optional): Filter information for the view
    - Properties:
      - `conjunction`: FilterConjunction
      - `conditions`: IFilterCondition<NumFieldType>[]
      - Where `IFilterCondition<T>` is defined as `IFilterBaseCondition & IFilterConditionMap[T]`
      - Type parameters:
        - `T` extends NumFieldType
  - `sortInfo` (ISortInfo, optional): Sorting information for the view
    - Type declaration:
      - `rules`: ISortedField[]
      - `keepSort`: boolean
    - Related types:
      - `IFilterValue`: string
      - `IFilterCheckbox`: [boolean] | null
      - `IFilterText`: [IFilterValue] | null
      - `IFilterNumber`: [IFilterValue] | null
      - `IFilterSingleSelect`: IFilterValue[] | null
      - `IFilterMultiSelect`: IFilterValue[] | null
      - `IFilterMember`: string[] | null
      - `IFilterDateTime`: [Exclude<FilterDuration, ExactDate>] | [ExactDate, number | null] | null

**Example:**
```javascript
import { useViewsMeta } from '@apitable/widget-sdk';

function ViewsMetaComponent() {
  const viewsMeta = useViewsMeta();
  
  return (
    <div>
      <h3>Views in Datasheet:</h3>
      <ul>
        {viewsMeta.map(view => (
          <li key={view.id}>
            {view.name} ({view.type})
            {view.hidden && " - Hidden"}
          </li>
        ))}
      </ul>
    </div>
  );
}
```

## Best Practices for Reading Data

1. **Use the appropriate hook for your needs**
   ```javascript
   // For a specific record
   const record = useRecord(recordId);
   
   // For all records in current view
   const records = useRecords();
   
   // For filtered records
   const filteredRecords = useFilteredRecords(filterFunction);
   ```

2. **Access cell values correctly based on field type**
   ```javascript
   // Get raw value (useful for calculations)
   const rawNumber = record.getCellValue('fldNumber');
   
   // Get formatted string (useful for display)
   const formattedNumber = record.getCellValueString('fldNumber');
   ```

3. **Handle missing data gracefully**
   ```javascript
   const value = record.getCellValue('fldText') || 'Default text';
   ```

4. **Optimize for large datasets**
   - Use filtering to reduce the number of records processed
   - Only extract the specific fields you need
   - Consider pagination for very large datasets

5. **Combine reading and writing operations**
   ```javascript
   // Read a value, modify it, and write it back
   const currentValue = record.getCellValue('fldCounter');
   const newValue = (currentValue || 0) + 1;
   
   datasheet.setRecord(record.id, {
     'fldCounter': newValue
   });
   ``` 

## Troubleshooting Common Issues

### React Hooks Rules Violations

**Problem:** Error message about hooks rules violation when using `useDatasheet` or other hooks in regular functions.

```javascript
// INCORRECT: Will cause "React Hook "useDatasheet" cannot be called inside a callback"
function myFunction() {
  const datasheet = useDatasheet('dstXXXXXXXX');
  // ...process data
}
```

**Solution:** Only use hooks at the top level of React components or custom hooks. Pass the data from hooks to regular functions:

```javascript
// CORRECT: Components use hooks
function MyComponent() {
  // Use hooks at the component level
  const datasheet = useDatasheet('dstXXXXXXXX');
  const records = useRecords(datasheet);
  
  // Pass data to regular functions
  const processedData = processData(datasheet, records);
  
  // ...render component
}

// Regular functions accept data as parameters
function processData(datasheet, records) {
  // Process the data
  return result;
}
```

### Incorrect API Method Usage

**Problem:** Error like `datasheet.getRecords is not a function` when trying to access records.

**Solution:** Use the correct React hooks for data access instead of trying to call methods directly on datasheet objects:

```javascript
// INCORRECT: Will cause "datasheet.getRecords is not a function"
function MyComponent() {
  const datasheet = useDatasheet('dstXXXXXXXX');
  const records = datasheet.getRecords(); // ERROR!
}

// CORRECT: Use the proper hooks
function MyComponent() {
  const datasheet = useDatasheet('dstXXXXXXXX');
  
  // For all records in current view
  const records = useRecords();
  
  // For all records in the datasheet
  const allRecords = useRecordsAll(datasheet);
  
  // For records in a specific view
  const viewRecords = useRecords(datasheet, 'viewIdXXXX');
}
```

Remember that:
1. Hooks like `useDatasheet`, `useRecords`, etc. must follow React rules of hooks
2. Data fetching should be done with hooks, not by calling methods on datasheet objects
3. Regular functions should accept data as parameters instead of trying to fetch it themselves 

### Non-existent Methods

**Problem:** Error like `datasheet.getRecordById is not a function` when trying to access a record by ID.

**Solution:** The method `getRecordById` does not exist. Instead, use the `useRecord` hook to get a single record by ID:

```javascript
// INCORRECT: Will cause "datasheet.getRecordById is not a function"
function MyComponent() {
  const datasheet = useDatasheet();
  const record = datasheet.getRecordById('recXXXXXXXX'); // ERROR! This method doesn't exist
}

// CORRECT: Use the proper hook
function MyComponent() {
  // For a single record by ID
  const record = useRecord('recXXXXXXXX');
  
  // Or if you need to access a record from a specific datasheet
  const datasheet = useDatasheet('dstXXXXXXXX');
  // Then use useRecords with filtering to find the record
  const records = useRecords();
  const myRecord = records.find(r => r.id === 'recXXXXXXXX');
}
``` 