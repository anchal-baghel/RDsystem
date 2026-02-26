import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Card, Table, Button, Row, Col } from "react-bootstrap";
import { FaBookOpen } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { FaCalendarAlt, FaRupeeSign, FaUser, FaClock } from "react-icons/fa";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import "./index.css";
import { FaUserPlus, FaEdit, FaTrash, FaSave, FaTimes } from "react-icons/fa";
import { FaIdBadge } from "react-icons/fa";
export default function Rduser() {
  const [cs, setcs] = useState([]);
  //Passbook Show Entries
  const [ps, setps] = useState([]);
  const [peshow, setpeshow] = useState(false);
  const handlepeClose = () => setpeshow(false);
  const handlepeShow = () => setpeshow(true);

 // let passbookshow = (id) => {
 //   axios.get("http://localhost:8080/passbookById/" + id).then((res) => {
 //     setps(res.data);
 //     console.log(ps);
 //      console.log(ps.length);
//let sm=0;
//for(let i=0;i<ps.length;i++){
 // sm=sm+res.data.rdamt;
//
//console.log("rdmt: "+sm)
//    });
//  };

let passbookshow = (id) => {
  axios
    .get("http://localhost:8080/passbookById/" + id)
    .then((res) => {

      setps(res.data);   // state set karo

      let sm = 0;

      for (let i = 0; i < res.data.length; i++) {
        sm = sm + res.data[i].rdamt;   // correct access
      }

      console.log("Total RD Amount: " + sm);
    });
};





  function getpassbookshow(Rid, name) {
    setrid(Rid);
    setName(name);
    handlepeShow();
    passbookshow(Rid);
  }

  //Passbook Entries

  const [pshow, setpshow] = useState(false);
  const handlepClose = () => setpshow(false);
  const handlepShow = () => setpshow(true);
  const [lateday, setlateday] = useState(0);
  const [fineamount, setFineamount] = useState(0);

  const getlateday = (e) => {
    const days = Number(e.target.value);
    setlateday(days);
    const fine = days * 50;
    setFineamount(fine);
  };

  let getfineamount = (e) => {
    setFineamount(e.target.value);
  };

  let pgetRid = (e) => {
    setrid(e.target.value);
  };

  let pgetRDdate = (e) => {
    usetRDdate(e.target.value);
  };
  let pgetRdamt = (e) => {
    usetRDamount(e.target.value);
  };

  function passbook(Rid, RdDate, RdAmt) {
    setrid(Rid);
    usetRDdate(RdDate);
    usetRDamount(RdAmt);
    handlepShow();
  }

  let RDpsave = () => {
    const data = {
      fineamt: fineamount,
      flag: 0,
      lastday: lateday,
      rdamt: urdamount,
      rddate: urddate,
      rid: Rid,
    };
    axios.post("http://localhost:8080/passbooksave", data).then((res) => {
      alert("successfully Insert......!");
      api();
      setpshow();
    });
  };

  //update
  const [ushow, setushow] = useState(false);
  const uhandleClose = () => setushow(false);
  const uhandleShow = () => setushow(true);

  const [Rid, setrid] = useState(" ");
  const [uname, usetName] = useState(" ");
  const [uaddresh, usetAddresh] = useState(" ");
  const [umob, usetMobile] = useState(" ");
  const [udate, usetDate] = useState(" ");
  const [ugender, usetGender] = useState(" ");
  const [urddate, usetRDdate] = useState(" ");
  const [urdamount, usetRDamount] = useState(" ");
  const [uoccupation, usetOccupation] = useState(" ");
  const [uaccount, usetAccount] = useState(" ");
  const [uaadhar, usetAadhar] = useState(" ");
  const [upan, usetPan] = useState(" ");
  const [unominationname, usetNominationname] = useState(" ");
  const [unominationaddresh, usetNominationaddr] = useState(" ");
  const [unominationaadhar, usetnominationaadhar] = useState(" ");
  const [unominationpan, usetNominationpan] = useState(" ");

  let ugetName = (e) => {
    usetName(e.target.value);
  };
  let ugetAddress = (e) => {
    usetAddresh(e.target.value);
  };
  let ugetMob = (e) => {
    usetMobile(e.target.value);
  };
  let ugetDate = (e) => {
    usetDate(e.target.value);
  };
  let ugetGender = (e) => {
    usetGender(e.target.value);
  };
  let ugetRDdate = (e) => {
    usetRDdate(e.target.value);
  };
  let ugetRdamt = (e) => {
    usetRDamount(e.target.value);
  };
  let ugetOccupation = (e) => {
    usetOccupation(e.target.value);
  };
  let ugetAccountNo = (e) => {
    usetAccount(e.target.value);
  };
  let ugetAadharNo = (e) => {
    usetAadhar(e.target.value);
  };
  let ugetPanNo = (e) => {
    usetPan(e.target.value);
  };
  let ugetNominationName = (e) => {
    usetNominationname(e.target.value);
  };
  let ugetNominationAddresh = (e) => {
    usetNominationaddr(e.target.value);
  };
  let ugetNominationAadharNo = (e) => {
    usetnominationaadhar(e.target.value);
  };
  let ugetNominationPanNo = (e) => {
    usetNominationpan(e.target.value);
  };

  let getdata = (
    Rid,
    Name,
    Addr,
    MobileNo,
    DOB,
    Gender,
    RdDate,
    RdAmt,
    Occupation,
    AccountNo,
    AdharNo,
    panNo,
    NomineeName,
    NomineeAddr,
    NomineeAdharNo,
    NomineePanNo
  ) => {
    setrid(Rid);
    usetName(Name);
    usetAddresh(Addr);
    usetMobile(MobileNo);
    usetDate(DOB);
    usetGender(Gender);
    usetRDdate(RdDate);
    usetRDamount(RdAmt);
    usetOccupation(Occupation);
    usetAccount(AccountNo);
    usetAadhar(AdharNo);
    usetPan(panNo);
    usetNominationname(NomineeName);
    usetNominationaddr(NomineeAddr);
    usetnominationaadhar(NomineeAdharNo);
    usetNominationpan(NomineePanNo);
    uhandleShow();
  };

  let RDupdate = () => {
    const utd = {
      Rid: Rid,
      Name: uname,
      Addr: uaddresh,
      MobileNo: umob,
      DOB: udate,
      Gender: ugender,
      RdDate: urddate,
      RdAmt: urdamount,
      Occupation: uoccupation,
      AccountNo: uaccount,
      AdharNo: uaadhar,
      panNo: upan,
      NomineeName: unominationname,
      NomineeAddr: unominationaddresh,
      NomineeAdharNo: unominationaadhar,
      NomineePanNo: unominationpan,
    };
    axios.put("http://localhost:8080/updt", utd).then((res) => {
      alert("successfully Update Data......!");
      api();
      setushow(false);
    });
  };

  //Save data
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [name, setName] = useState(" ");
  const [addresh, setAddresh] = useState(" ");
  const [mob, setMobile] = useState(" ");
  const [date, setDate] = useState(" ");
  const [gender, setGender] = useState(" ");
  const [rddate, setRDdate] = useState(" ");
  const [rdamount, setRDamount] = useState(" ");
  const [occupation, setOccupation] = useState(" ");
  const [account, setAccount] = useState(" ");
  const [aadhar, setAadhar] = useState(" ");
  const [pan, setPan] = useState(" ");
  const [nominationname, setNominationname] = useState(" ");
  const [nominationaddresh, setNominationaddr] = useState(" ");
  const [nominationaadhar, setnominationaadhar] = useState(" ");
  const [nominationpan, setNominationpan] = useState(" ");

  let getName = (e) => {
    setName(e.target.value);
  };
  let getAddress = (e) => {
    setAddresh(e.target.value);
  };
  let getMob = (e) => {
    setMobile(e.target.value);
  };
  let getDate = (e) => {
    setDate(e.target.value);
  };
  let getGender = (e) => {
    setGender(e.target.value);
  };
  let getRDdate = (e) => {
    setRDdate(e.target.value);
  };
  let getRdamt = (e) => {
    setRDamount(e.target.value);
  };
  let getOccupation = (e) => {
    setOccupation(e.target.value);
  };
  let getAccountNo = (e) => {
    setAccount(e.target.value);
  };
  let getAadharNo = (e) => {
    setAadhar(e.target.value);
  };
  let getPanNo = (e) => {
    setPan(e.target.value);
  };
  let getNominationName = (e) => {
    setNominationname(e.target.value);
  };
  let getNominationAddresh = (e) => {
    setNominationaddr(e.target.value);
  };
  let getNominationAadharNo = (e) => {
    setnominationaadhar(e.target.value);
  };
  let getNominationPanNo = (e) => {
    setNominationpan(e.target.value);
  };

  let RDsave = () => {
    const data = {
      Name: name,
      Addr: addresh,
      MobileNo: mob,
      DOB: date,
      Gender: gender,
      RdDate: rddate,
      RdAmt: rdamount,
      Occupation: occupation,
      AccountNo: account,
      AdharNo: aadhar,
      panNo: pan,
      NomineeName: nominationname,
      NomineeAddr: nominationaddresh,
      NomineeAdharNo: nominationaadhar,
      NomineePanNo: nominationpan,
    };
    axios.post("http://localhost:8080/save", data).then((res) => {
      alert("successfully Insert......!");
      api();
      setShow(false);
    });
  };
  let api = () => {
    axios.get("http://localhost:8080/rduser").then((res) => {
      setcs(res.data);
    });
  };

  let del = (Rid) => {
    axios.delete("http://localhost:8080/del/" + Rid).then((res) => {
      alert("Delete success...!");
      api();
      setShow(false);
    });
  };

  useEffect(() => {
    api();
  }, []);

  return (
    <>
      <Button
        onClick={handleShow}
        className="fw-semibold px-4 py-2 text-white border-0"
        style={{
          background: "linear-gradient(135deg, #0d6efd, #084298)",
        }}
      >
        <FaUserPlus className="me-2 mb-1" />
        Add New RD User
      </Button>

      {/* Passbook Entry Show */}
      <Modal show={peshow} onHide={handlepeClose} size="lg" centered>
        <Modal.Header closeButton className="bg-dark text-white">
          <Modal.Title className="d-flex align-items-center gap-2">
            <FaBookOpen />
            Passbook Entries
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {/* User Info Section */}
          <div className="mb-3 p-3 bg-light rounded shadow-sm">
            <div className="row">
              <div className="col-md-6 d-flex align-items-center gap-2">
                <FaIdBadge className="text-primary" />
                <strong>RD User ID:</strong> {Rid}
              </div>
              <div className="col-md-6 d-flex align-items-center gap-2">
                <FaUser className="text-success" />
                <strong>RD User Name:</strong> {name}
              </div>
            </div>
          </div>

          {/* Table Section */}
          <div className="table-responsive">
            <table className="table table-bordered table-hover text-center align-middle">
              <thead className="table-dark">
                <tr>
                  <th>PID</th>
                  <th>RID</th>
                  <th>RD Date</th>
                  <th>RD Amount</th>
                  <th>Late Days</th>
                  <th>Fine Amount</th>
                </tr>
              </thead>
              <tbody>
                {ps.length > 0 ? (
                  ps.map((item) => (
                    <tr key={item.pid}>
                      <td>{item.pid}</td>
                      <td>{item.rid}</td>
                      <td>{item.rddate}</td>
                      <td className="text-success fw-semibold">
                        ₹ {item.rdamt}
                      </td>
                      <td>{item.lastday}</td>
                      <td className="text-danger fw-semibold">
                        ₹ {item.fineamt}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="text-muted">
                      No Passbook Entries Found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="outline-secondary" onClick={handlepeClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Passbook Entry */}
      <Modal show={pshow} onHide={handlepClose} centered>
        <Modal.Header closeButton className="bg-primary text-white">
          <Modal.Title className="d-flex align-items-center gap-2">
            <FaBookOpen />
            RD Passbook Entry
          </Modal.Title>
        </Modal.Header>

        <Modal.Body className="px-4 py-3">
          {/* RD User ID */}
          <Form.Group className="mb-3">
            <Form.Label className="fw-semibold">
              <FaUser className="me-2 text-primary" />
              RD User ID
            </Form.Label>
            <Form.Control type="text" value={Rid} onChange={pgetRid} readOnly />
          </Form.Group>

          {/* RD Date */}
          <Form.Group className="mb-3">
            <Form.Label className="fw-semibold">
              <FaCalendarAlt className="me-2 text-primary" />
              RD Date
            </Form.Label>
            <Form.Control type="date" value={urddate} onChange={pgetRDdate} />
          </Form.Group>

          {/* RD Amount */}
          <Form.Group className="mb-3">
            <Form.Label className="fw-semibold">
              <FaRupeeSign className="me-2 text-success" />
              RD Amount
            </Form.Label>
            <Form.Control
              type="number"
              value={urdamount}
              onChange={pgetRdamt}
              placeholder="Enter RD Amount"
            />
          </Form.Group>

          {/* Late Days */}
          <Form.Group className="mb-3">
            <Form.Label className="fw-semibold">
              <FaClock className="me-2 text-warning" />
              Late Days
            </Form.Label>
            <Form.Control
              type="number"
              value={lateday}
              onChange={getlateday}
              placeholder="Enter Late Days"
            />
          </Form.Group>

          {/* Fine Amount */}
          <Form.Group>
            <Form.Label className="fw-semibold">
              <FaRupeeSign className="me-2 text-danger" />
              Fine Amount
            </Form.Label>
            <Form.Control
              type="number"
              value={fineamount}
              onChange={getfineamount}
              placeholder="Enter Fine Amount"
            />
          </Form.Group>
        </Modal.Body>

        <Modal.Footer className="px-4">
          <Button variant="outline-secondary" onClick={handlepClose}>
            Close
          </Button>

          <Button variant="primary" onClick={RDpsave}>
            <FaBookOpen className="me-2" />
            Save Entry
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Add RD User Form*/}

      <Modal show={show} onHide={handleClose} size="xl" centered>
        <Modal.Header closeButton className="bg-primary text-white">
          <Modal.Title>
            <FaUserPlus className="me-2" />
            Add New RD User
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Row>
              {/* LEFT SIDE */}
              <Col md={6}>
                <h6 className="text-primary">Personal Details</h6>

                <Form.Control
                  className="mb-2"
                  placeholder="Full Name"
                  onChange={getName}
                  required
                />

                <Form.Control
                  className="mb-2"
                  placeholder="Address"
                  onChange={getAddress}
                  required
                />

                <Form.Control
                  className="mb-2"
                  type="number"
                  placeholder="Mobile Number"
                  onChange={getMob}
                  required
                />
                <FloatingLabel
                  controlId="dob"
                  label="Date of Birth"
                  className="mb-2"
                >
                  <Form.Control type="date" onChange={getDate} required />
                </FloatingLabel>

                <Form.Control
                  className="mb-3"
                  placeholder="Gender"
                  onChange={getGender}
                  required
                />
                <h6 className="text-success">RD Details</h6>
                <FloatingLabel
                  controlId="rddate"
                  label="RD Start Date"
                  className="mb-2"
                >
                  <Form.Control type="date" onChange={getRDdate} required />
                </FloatingLabel>
                <Form.Control
                  className="mb-2"
                  type="number"
                  placeholder="RD Amount"
                  onChange={getRdamt}
                  required
                />

                <Form.Control
                  className="mb-2"
                  placeholder="Occupation"
                  onChange={getOccupation}
                  required
                />

                <Form.Control
                  className="mb-3"
                  type="number"
                  placeholder="Account Number"
                  onChange={getAccountNo}
                  required
                />
              </Col>

              {/* RIGHT SIDE */}
              <Col md={6}>
                <h6 className="text-warning">KYC Details</h6>

                <Form.Control
                  className="mb-2"
                  type="number"
                  placeholder="Aadhaar Number"
                  onChange={getAadharNo}
                  required
                />

                <Form.Control
                  className="mb-3"
                  placeholder="PAN Number"
                  onChange={getPanNo}
                  required
                />

                <h6 className="text-info">Nominee Details</h6>

                <Form.Control
                  className="mb-2"
                  placeholder="Nominee Name"
                  onChange={getNominationName}
                  required
                />

                <Form.Control
                  className="mb-2"
                  placeholder="Nominee Address"
                  onChange={getNominationAddresh}
                  required
                />

                <Form.Control
                  className="mb-2"
                  type="number"
                  placeholder="Nominee Aadhaar"
                  onChange={getNominationAadharNo}
                  required
                />

                <Form.Control
                  className="mb-2"
                  placeholder="Nominee PAN"
                  onChange={getNominationPanNo}
                  required
                />
              </Col>
            </Row>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            <FaTimes className="me-1" />
            Close
          </Button>

          <Button variant="primary" onClick={RDsave}>
            <FaSave className="me-1" />
            Save RD User
          </Button>
        </Modal.Footer>
      </Modal>
      {/* Update RD User Form*/}
      <Modal show={ushow} onHide={uhandleClose} size="xl" centered>
        <Modal.Header closeButton className="bg-warning">
          <Modal.Title>
            <FaEdit className="me-2" />
            Update RD User
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Row>
              {/* LEFT COLUMN */}
              <Col md={6}>
                <h6 className="text-primary mb-2">Personal Details</h6>

                <FloatingLabel label="Full Name" className="mb-2">
                  <Form.Control
                    type="text"
                    value={uname}
                    onChange={ugetName}
                    required
                  />
                </FloatingLabel>

                <FloatingLabel label="Address" className="mb-2">
                  <Form.Control
                    type="text"
                    value={uaddresh}
                    onChange={ugetAddress}
                    required
                  />
                </FloatingLabel>

                <FloatingLabel label="Mobile Number" className="mb-2">
                  <Form.Control
                    type="number"
                    value={umob}
                    onChange={ugetMob}
                    required
                  />
                </FloatingLabel>

                <FloatingLabel label="Date of Birth" className="mb-2">
                  <Form.Control
                    type="date"
                    value={udate}
                    onChange={ugetDate}
                    required
                  />
                </FloatingLabel>

                <FloatingLabel label="Gender" className="mb-3">
                  <Form.Control
                    type="text"
                    value={ugender}
                    onChange={ugetGender}
                    required
                  />
                </FloatingLabel>

                <h6 className="text-success mb-2">RD Details</h6>

                <FloatingLabel label="RD Start Date" className="mb-2">
                  <Form.Control
                    type="date"
                    value={urddate}
                    onChange={ugetRDdate}
                    required
                  />
                </FloatingLabel>

                <FloatingLabel label="RD Amount" className="mb-2">
                  <Form.Control
                    type="number"
                    value={urdamount}
                    onChange={ugetRdamt}
                    required
                  />
                </FloatingLabel>

                <FloatingLabel label="Occupation" className="mb-2">
                  <Form.Control
                    type="text"
                    value={uoccupation}
                    onChange={ugetOccupation}
                    required
                  />
                </FloatingLabel>

                <FloatingLabel label="Account Number" className="mb-2">
                  <Form.Control
                    type="text"
                    value={uaccount}
                    onChange={ugetAccountNo}
                    required
                  />
                </FloatingLabel>
              </Col>

              {/* RIGHT COLUMN */}
              <Col md={6}>
                <h6 className="text-info mb-2">KYC Details</h6>

                <FloatingLabel label="Aadhaar Number" className="mb-2">
                  <Form.Control
                    type="number"
                    value={uaadhar}
                    onChange={ugetAadharNo}
                    required
                  />
                </FloatingLabel>

                <FloatingLabel label="PAN Number" className="mb-3">
                  <Form.Control
                    type="text"
                    value={upan}
                    onChange={ugetPanNo}
                    required
                  />
                </FloatingLabel>

                <h6 className="text-warning mb-2">Nominee Details</h6>

                <FloatingLabel label="Nominee Name" className="mb-2">
                  <Form.Control
                    type="text"
                    value={unominationname}
                    onChange={ugetNominationName}
                    required
                  />
                </FloatingLabel>

                <FloatingLabel label="Nominee Address" className="mb-2">
                  <Form.Control
                    type="text"
                    value={unominationaddresh}
                    onChange={ugetNominationAddresh}
                    required
                  />
                </FloatingLabel>

                <FloatingLabel label="Nominee Aadhaar" className="mb-2">
                  <Form.Control
                    type="number"
                    value={unominationaadhar}
                    onChange={ugetNominationAadharNo}
                    required
                  />
                </FloatingLabel>

                <FloatingLabel label="Nominee PAN" className="mb-2">
                  <Form.Control
                    type="text"
                    value={unominationpan}
                    onChange={ugetNominationPanNo}
                    required
                  />
                </FloatingLabel>
              </Col>
            </Row>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={uhandleClose}>
            <FaTimes className="me-1" />
            Close
          </Button>

          <Button variant="warning" onClick={RDupdate}>
            <FaSave className="me-1" />
            Update User
          </Button>
        </Modal.Footer>
      </Modal>

      <Container fluid className="mt-3">
        <Card className="shadow-lg border-0">
          <Card.Header className="bg-dark text-white text-center py-3">
            <h4 className="mb-0 fw-bold">RD USER DATA</h4>
          </Card.Header>

          <Card.Body style={{ overflowX: "auto" }}>
            <Table
              striped
              bordered
              hover
              responsive
              size="sm"
              className="text-nowrap text-center align-middle"
            >
              <thead className="table-dark">
                <tr>
                  <th>#</th>
                  <th>RID</th>
                  <th>Name</th>
                  <th>Address</th>
                  <th>Mobile</th>
                  <th>DOB</th>
                  <th>Gender</th>
                  <th>RD Start</th>
                  <th>RD Amt</th>
                  <th>Occupation</th>
                  <th>Account No</th>
                  <th>Aadhaar</th>
                  <th>PAN</th>
                  <th>Nominee</th>
                  <th>Nominee Address</th>
                  <th>Nominee Aadhaar</th>
                  <th>Nominee PAN</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {cs.map((item, index) => (
                  <tr key={index}>
                    <td className="fw-bold">{index + 1}</td>
                    <td>{item.Rid}</td>
                    <td className="fw-semibold text-dark">{item.Name}</td>

                    <td style={{ minWidth: "180px" }}>{item.Addr}</td>

                    <td>
                      <span className="badge bg-info">{item.MobileNo}</span>
                    </td>

                    <td>{item.DOB}</td>

                    <td>
                      <span className="badge bg-secondary">{item.Gender}</span>
                    </td>

                    <td>{item.RdDate}</td>

                    <td>
                      <span className="badge bg-success">₹ {item.RdAmt}</span>
                    </td>

                    <td>{item.Occupation}</td>

                    <td className="fw-bold text-dark">{item.AccountNo}</td>

                    <td>{item.AdharNo}</td>

                    <td>
                      <span className="badge bg-warning text-dark">
                        {item.panNo}
                      </span>
                    </td>

                    <td className="fw-semibold">{item.NomineeName}</td>

                    <td style={{ minWidth: "180px" }}>{item.NomineeAddr}</td>

                    <td>{item.NomineeAdharNo}</td>

                    <td>{item.NomineePanNo}</td>

                    <td>
                      <div className="d-flex justify-content-center gap-2">
                        <Button
                          size="sm"
                          variant="outline-warning"
                          onClick={() =>
                            getdata(
                              item.Rid,
                              item.Name,
                              item.Addr,
                              item.MobileNo,
                              item.DOB,
                              item.Gender,
                              item.RdDate,
                              item.RdAmt,
                              item.Occupation,
                              item.AccountNo,
                              item.AdharNo,
                              item.panNo,
                              item.NomineeName,
                              item.NomineeAddr,
                              item.NomineeAdharNo,
                              item.NomineePanNo
                            )
                          }
                        >
                          <FaEdit className="me-1" />
                        </Button>

                        <Button
                          size="sm"
                          variant="outline-danger"
                          onClick={() => del(item.Rid)}
                        >
                          <FaTrash className="me-1" />
                        </Button>

                        <Button
                          size="sm"
                          variant="outline-primary"
                          className="fw-semibold d-flex align-items-center gap-2 px-3 py-2 text-white border-0 shadow-sm passbook-btn"
                          onClick={() =>
                            passbook(item.Rid, item.RdDate, item.RdAmt)
                          }
                          style={{
                            background:
                              "linear-gradient(135deg, #0dcaf0, #087990)",
                            borderRadius: "6px",
                            transition: "all 0.25s ease",
                            whiteSpace: "nowrap",
                          }}
                        >
                          <FaBookOpen className="me-1" />
                        </Button>

                        <Button
                          size="sm"
                          variant="outline-success"
                          onClick={() => getpassbookshow(item.Rid, item.Name)}
                          className="fw-semibold d-flex align-items-center gap-2 px-3 py-2 text-white border-0 shadow-sm passbook-btn"
                          style={{
                            background:
                              "linear-gradient(135deg, #198754, #145c32)",
                            borderRadius: "6px",
                            transition: "all 0.25s ease",
                            whiteSpace: "nowrap",
                          }}
                        >
                          <FaEye className="me-1" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}
