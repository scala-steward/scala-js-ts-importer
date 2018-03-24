
import scala.scalajs.js
import js.annotation._
import js.|

package mappedtypes {

@js.native
trait Person extends js.Object {
  var name: String = js.native
  var age: Double = js.native
}

@js.native
trait UniformData[V] extends js.Object {
  var `type`: String = js.native
  var value: V = js.native
  var name: String = js.native
}

@js.native
@JSGlobalScope
object Mappedtypes extends js.Object {
  type PersonFields = js.Dictionary[js.Any]
  type Keys = String
  type Flags = js.Dictionary[Boolean]
  type Readonly[T] = js.Dictionary[js.Any]
  type Partial[T] = js.Dictionary[js.Any]
  type UniformDataMap[U] = js.Dictionary[UniformData[js.Any]]
}

}
