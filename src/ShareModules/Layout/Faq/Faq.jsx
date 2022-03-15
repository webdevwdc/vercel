import React from 'react'
import "./Faq.scss";
import Accordion from 'react-bootstrap/Accordion';
function faq() {
return (
<>
    <div className="faq section-dv">
        <div className="faq__body">
            <div className="faq__body--heading">
                <h2 className="heading-body">Frequently Asked Questions</h2>
                <p>Have questions? We’re here to help.</p>
            </div>

            <div className="faq__body--acc">
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>What is the price?</Accordion.Header>
                        <Accordion.Body>
                        1 ETH initial and then 0.1 monthly
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>How many keys are there?</Accordion.Header>
                        <Accordion.Body>
                        1 ETH initial and then 0.1 monthly
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Are keys unbindable?</Accordion.Header>
                        <Accordion.Body>
                        1 ETH initial and then 0.1 monthly
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>What chains does TXN support?</Accordion.Header>
                        <Accordion.Body>
                        1 ETH initial and then 0.1 monthly
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                        <Accordion.Header>Is TXN Mac OS compatible?</Accordion.Header>
                        <Accordion.Body>
                        1 ETH initial and then 0.1 monthly
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5">
                        <Accordion.Header>Where can I get more questions answered?</Accordion.Header>
                        <Accordion.Body>
                        1 ETH initial and then 0.1 monthly
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>
    </div>
</>
)
}

export default faq;