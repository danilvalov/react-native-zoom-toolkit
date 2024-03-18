import type {
  GestureStateChangeEvent,
  PinchGestureHandlerEventPayload,
  TapGestureHandlerEventPayload,
  PanGestureHandlerEventPayload,
} from 'react-native-gesture-handler';
import type { HitSlop } from 'react-native-gesture-handler/lib/typescript/handlers/gestureHandlerCommon';
import type {
  EasingFunction,
  EasingFunctionFactory,
  ReduceMotion,
} from 'react-native-reanimated';

type TimingConfig = Partial<{
  duration: number;
  easing: EasingFunction | EasingFunctionFactory;
  reduceMotion: ReduceMotion;
}>;

export type Vector<T> = {
  x: T;
  y: T;
};

export type SizeVector<T> = {
  width: T;
  height: T;
};

export type BoundsFuction = (scale: number) => Vector<number>;

export enum PanMode {
  CLAMP = 'clamp',
  FREE = 'free',
  FRICTION = 'friction',
}

export enum ScaleMode {
  CLAMP = 'clamp',
  BOUNCE = 'bounce',
}

export type CommonZoomProps = Partial<{
  hitSlop: HitSlop;
  timingConfig: TimingConfig;
}>;

export type CommonResumableProps = Partial<{
  minScale: number;
  maxScale: number;
  panMode: PanMode;
  scaleMode: ScaleMode;
  panWithPinch: boolean;
}>;

export type TapGestureEvent =
  GestureStateChangeEvent<TapGestureHandlerEventPayload>;

export type PinchGestureEvent =
  GestureStateChangeEvent<PinchGestureHandlerEventPayload>;

export type PanGestureEvent =
  GestureStateChangeEvent<PanGestureHandlerEventPayload>;

export type PanGestureEventCallback = (e: PanGestureEvent) => void;
export type TapGestureEventCallback = (e: TapGestureEvent) => void;
export type PinchGestureEventCallback = (e: PinchGestureEvent) => void;

export type PanGestureCallbacks = Partial<{
  onPanStart: PanGestureEventCallback;
  onPanEnd: PanGestureEventCallback;
}>;

export type PinchGestureCallbacks = Partial<{
  onPinchStart: PinchGestureEventCallback;
  onPinchEnd: PinchGestureEventCallback;
}>;

export type TapGestureCallbacks = Partial<{
  onTap: TapGestureEventCallback;
  onDoubleTap: TapGestureEventCallback;
}>;