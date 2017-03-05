import * as chai from "chai"
import * as db from "../../src/db"
import visapiTest from "./visapi"


export default function (): void {
  describe("Integration Tests", function () {
    it("Should connect to the database", function () {
      this.retries(5);
      return new Promise((resolve, reject) => {
        db.query.raw("SELECT 1+1")
          .then(resolve)
      })
    })
  })
  visapiTest()
}
