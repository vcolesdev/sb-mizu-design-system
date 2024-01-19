import React from "react";
import ButtonOld from "./ButtonOld";

/**
 * Button Stories
 * - ButtonSizes()
 * - ButtonVariants()
 * - ButtonActions()
 * - ButtonsFullWidth()
 */

export function ButtonSizes({ label }: { label?: string }) {
  return (
    <section>
      {/* Small */}
      <div className="flex mb-5">
        <div className="me-4">
          <ButtonOld label={label || "Button"} size="sm" type="solid" variant="primary" />
        </div>
        <div className="me-4">
          <ButtonOld label={label || "Button"} size="md" type="solid" variant="primary" />
        </div>
        <div className="me-4">
          <ButtonOld label={label || "Button"} size="lg" type="solid" variant="primary" />
        </div>
        <div className="me-4">
          <ButtonOld label={label || "Button"} size="xl" type="solid" variant="primary" />
        </div>
      </div>
    </section>
  );
}

export function ButtonVariants({ label }: { label?: string }) {
  return (
    <section>
      {/* Primary */}
      <div className="flex mb-5">
        <div className="me-4">
          <ButtonOld label={label || "Button"} type="solid" variant="primary" />
        </div>
        <div className="me-4">
          <ButtonOld label={label || "Button"} type="outline" variant="primary" />
        </div>
        <div className="me-4">
          <ButtonOld label={label || "Button"} type="ghost" variant="primary" />
        </div>
      </div>
      {/* Secondary */}
      <div className="flex mb-5">
        <div className="me-4">
          <ButtonOld label={label || "Button"} type="solid" variant="secondary" />
        </div>
        <div className="me-4">
          <ButtonOld label={label || "Button"} type="outline" variant="secondary" />
        </div>
        <div className="me-4">
          <ButtonOld label={label || "Button"} type="ghost" variant="secondary" />
        </div>
      </div>
      {/* Brand */}
      <div className="flex mb-5">
        <div className="me-4">
          <ButtonOld label={label || "Button"} type="solid" variant="brand" />
        </div>
        <div className="me-4">
          <ButtonOld label={label || "Button"} type="outline" variant="brand" />
        </div>
        <div className="me-4">
          <ButtonOld label={label || "Button"} type="ghost" variant="brand" />
        </div>
      </div>
    </section>
  );
}

export function ButtonActions({ label }: { label?: string }) {
  return (
    <section>
      {/* Success */}
      <div className="flex mb-5">
        <div className="me-4">
          <ButtonOld label={label || "Button"} type="solid" variant="success" />
        </div>
        <div className="me-4">
          <ButtonOld label={label || "Button"} type="outline" variant="success" />
        </div>
        <div className="me-4">
          <ButtonOld label={label || "Button"} type="ghost" variant="success" />
        </div>
      </div>
      {/* Info */}
      <div className="flex mb-5">
        <div className="me-4">
          <ButtonOld label={label || "Button"} type="solid" variant="info" />
        </div>
        <div className="me-4">
          <ButtonOld label={label || "Button"} type="outline" variant="info" />
        </div>
        <div className="me-4">
          <ButtonOld label={label || "Button"} type="ghost" variant="info" />
        </div>
      </div>
      {/* Warning */}
      <div className="flex mb-5">
        <div className="me-4">
          <ButtonOld label={label || "Button"} type="solid" variant="warning" />
        </div>
        <div className="me-4">
          <ButtonOld label={label || "Button"} type="outline" variant="warning" />
        </div>
        <div className="me-4">
          <ButtonOld label={label || "Button"} type="ghost" variant="warning" />
        </div>
      </div>
      {/* Danger */}
      <div className="flex mb-5">
        <div className="me-4">
          <ButtonOld label={label || "Button"} type="solid" variant="danger" />
        </div>
        <div className="me-4">
          <ButtonOld label={label || "Button"} type="outline" variant="danger" />
        </div>
        <div className="me-4">
          <ButtonOld label={label || "Button"} type="ghost" variant="danger" />
        </div>
      </div>
    </section>
  );
}

export function ButtonsFullWidth(props: any) {
  return (
    <div className="max-w-2xl w-full">
      <div className="mb-3">
        <ButtonOld fullWidth variant="primary" {...props} />
      </div>
      <div className="mb-3">
        <ButtonOld fullWidth variant="secondary" {...props} />
      </div>
      <div>
        <ButtonOld fullWidth variant="brand" {...props} />
      </div>
    </div>
  );
}

export function ButtonsSquared(props: any) {
  return (
    <div className="flex">
      <div className="me-3">
        <ButtonOld squared variant="primary" {...props} />
      </div>
      <div className="me-3">
        <ButtonOld squared variant="secondary" {...props} />
      </div>
      <div className="me-3">
        <ButtonOld squared variant="brand" {...props} />
      </div>
    </div>
  );
}
