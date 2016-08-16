
# u.Row

## rowId

获取当前行的属性值rowId

	row.rowId

## setValue

设置当前行row的字段值

	row.setValue(fieldName, value)


**params:**

*fieldName* : 字段名

*value*:　值   

---
## getValue  

获取当前行row字段的值

	row.getValue(fieldName)

**params:**

*fieldName*: 字段名

----------

## setSimpleData

设置当前行row中的数据

	
	row.setSimpleData({"field1":"v1","field2":"v2"})
 
---

## getSimpleData

获取当前行row中的数据

	
	row.getSimpleData()
 
---
## ref

以knockout语法做双向绑定，显示此行的字段值

	<label data-bind="text: row.ref('fieldName')"></label>

*params:*

`fieldName` : 字段名