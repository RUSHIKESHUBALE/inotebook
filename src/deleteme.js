 C:\Users\rusuba89\Desktop\new Learning\inotebook\backend\node_modules\mongoose\lib\document.js:3125
     this.$__.validationError = new ValidationError(this);
                                ^

 ValidationError: notes validation failed: title: Cast to string failed for value "[ 'Absolute new' ]" (type Array) at path "title", description: Cast to string failed for value "[ 'Description new ' ]" (type Array) at path "description", tag: Cast to string failed for value "[ 'Tag new ' ]" (type Array) at path "tag"
     at model.Document.invalidate (C:\Users\rusuba89\Desktop\new Learning\inotebook\backend\node_modules\mongoose\lib\document.js:3125:32)
     at model.$set (C:\Users\rusuba89\Desktop\new Learning\inotebook\backend\node_modules\mongoose\lib\document.js:1465:12)
     at model.$set (C:\Users\rusuba89\Desktop\new Learning\inotebook\backend\node_modules\mongoose\lib\document.js:1148:16)
     at model.Document (C:\Users\rusuba89\Desktop\new Learning\inotebook\backend\node_modules\mongoose\lib\document.js:166:12)
     at model.Model (C:\Users\rusuba89\Desktop\new Learning\inotebook\backend\node_modules\mongoose\lib\model.js:122:12)
     at new model (C:\Users\rusuba89\Desktop\new Learning\inotebook\backend\node_modules\mongoose\lib\model.js:5092:15)
     at C:\Users\rusuba89\Desktop\new Learning\inotebook\backend\routes\notes.js:46:29
     at Layer.handle [as handle_request] (C:\Users\rusuba89\Desktop\new Learning\inotebook\backend\node_modules\express\lib\router\layer.js:95:5)
     at next (C:\Users\rusuba89\Desktop\new Learning\inotebook\backend\node_modules\express\lib\router\route.js:144:13)
     at middleware (C:\Users\rusuba89\Desktop\new Learning\inotebook\backend\node_modules\express-validator\src\middlewares\check.js:16:13) {
   errors: {
     title: CastError: Cast to string failed for value "[ 'Absolute new' ]" (type Array) at path "title"
         at SchemaString.cast (C:\Users\rusuba89\Desktop\new Learning\inotebook\backend\node_modules\mongoose\lib\schema\string.js:603:11)
         at SchemaString.SchemaType.applySetters (C:\Users\rusuba89\Desktop\new Learning\inotebook\backend\node_modules\mongoose\lib\schematype.js:1201:12)
         at model.$set (C:\Users\rusuba89\Desktop\new Learning\inotebook\backend\node_modules\mongoose\lib\document.js:1423:22)
         at model.$set (C:\Users\rusuba89\Desktop\new Learning\inotebook\backend\node_modules\mongoose\lib\document.js:1148:16)
         at model.Document (C:\Users\rusuba89\Desktop\new Learning\inotebook\backend\node_modules\mongoose\lib\document.js:166:12)
         at model.Model (C:\Users\rusuba89\Desktop\new Learning\inotebook\backend\node_modules\mongoose\lib\model.js:122:12)
         at new model (C:\Users\rusuba89\Desktop\new Learning\inotebook\backend\node_modules\mongoose\lib\model.js:5092:15)
         at C:\Users\rusuba89\Desktop\new Learning\inotebook\backend\routes\notes.js:46:29
         at Layer.handle [as handle_request] (C:\Users\rusuba89\Desktop\new Learning\inotebook\backend\node_modules\express\lib\router\layer.js:95:5)
         at next (C:\Users\rusuba89\Desktop\new Learning\inotebook\backend\node_modules\express\lib\router\route.js:144:13) {
       stringValue: `"[ 'Absolute new' ]"`,
       messageFormat: undefined,
       kind: 'string',
       value: [ 'Absolute new' ],
       path: 'title',
       reason: null,
       valueType: 'Array'
     },
     description: CastError: Cast to string failed for value "[ 'Description new ' ]" (type Array) at path "description"
         at SchemaString.cast (C:\Users\rusuba89\Desktop\new Learning\inotebook\backend\node_modules\mongoose\lib\schema\string.js:603:11)
         at SchemaString.SchemaType.applySetters (C:\Users\rusuba89\Desktop\new Learning\inotebook\backend\node_modules\mongoose\lib\schematype.js:1201:12)
         at model.$set (C:\Users\rusuba89\Desktop\new Learning\inotebook\backend\node_modules\mongoose\lib\document.js:1423:22)
         at model.$set (C:\Users\rusuba89\Desktop\new Learning\inotebook\backend\node_modules\mongoose\lib\document.js:1148:16)
         at model.Document (C:\Users\rusuba89\Desktop\new Learning\inotebook\backend\node_modules\mongoose\lib\document.js:166:12)
         at model.Model (C:\Users\rusuba89\Desktop\new Learning\inotebook\backend\node_modules\mongoose\lib\model.js:122:12)
         at new model (C:\Users\rusuba89\Desktop\new Learning\inotebook\backend\node_modules\mongoose\lib\model.js:5092:15)
         at C:\Users\rusuba89\Desktop\new Learning\inotebook\backend\routes\notes.js:46:29
         at Layer.handle [as handle_request] (C:\Users\rusuba89\Desktop\new Learning\inotebook\backend\node_modules\express\lib\router\layer.js:95:5)
         at next (C:\Users\rusuba89\Desktop\new Learning\inotebook\backend\node_modules\express\lib\router\route.js:144:13) {
       stringValue: `"[ 'Description new ' ]"`,
       messageFormat: undefined,
       kind: 'string',
       value: [ 'Description new ' ],
       path: 'description',
       reason: null,
       valueType: 'Array'
     },
     tag: CastError: Cast to string failed for value "[ 'Tag new ' ]" (type Array) at path "tag"
         at SchemaString.cast (C:\Users\rusuba89\Desktop\new Learning\inotebook\backend\node_modules\mongoose\lib\schema\string.js:603:11)
         at SchemaString.SchemaType.applySetters (C:\Users\rusuba89\Desktop\new Learning\inotebook\backend\node_modules\mongoose\lib\schematype.js:1201:12)
         at model.$set (C:\Users\rusuba89\Desktop\new Learning\inotebook\backend\node_modules\mongoose\lib\document.js:1423:22)
         at model.$set (C:\Users\rusuba89\Desktop\new Learning\inotebook\backend\node_modules\mongoose\lib\document.js:1148:16)
         at model.Document (C:\Users\rusuba89\Desktop\new Learning\inotebook\backend\node_modules\mongoose\lib\document.js:166:12)
         at model.Model (C:\Users\rusuba89\Desktop\new Learning\inotebook\backend\node_modules\mongoose\lib\model.js:122:12)
         at new model (C:\Users\rusuba89\Desktop\new Learning\inotebook\backend\node_modules\mongoose\lib\model.js:5092:15)
         at C:\Users\rusuba89\Desktop\new Learning\inotebook\backend\routes\notes.js:46:29
         at Layer.handle [as handle_request] (C:\Users\rusuba89\Desktop\new Learning\inotebook\backend\node_modules\express\lib\router\layer.js:95:5)
         at next (C:\Users\rusuba89\Desktop\new Learning\inotebook\backend\node_modules\express\lib\router\route.js:144:13) {
       stringValue: `"[ 'Tag new ' ]"`,
       messageFormat: undefined,
       kind: 'string',
       value: [ 'Tag new ' ],
       path: 'tag',
       reason: null,
       valueType: 'Array'
     }
   },
   _message: 'notes validation failed'